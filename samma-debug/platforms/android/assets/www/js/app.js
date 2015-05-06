/*! 
 * Roots v 2.0.0
 * Follow me @adanarchila at Codecanyon.net
 * URL: http://codecanyon.net/item/roots-phonegapcordova-multipurpose-hybrid-app/9525999
 * Don't forget to rate Roots if you like it! :)
 */

// In this file we are goint to include all the Controllers our app it's going to need
 
(function(){
    'use strict';



    var app = angular.module('app', ['onsen',  'angular-images-loaded', 'ngAudio']);
   
   var lang;
    var  ls = window.localStorage;
    var data1 = new Array();
    var data2 = new Array();

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var i = today.getMinutes();
        
    var g_rdate,mp3,mp3_key;

    var thmonth = new Array ("","มกราคม","กุมภาพันธ์","มีนาคม",
        "เมษายน","พฤษภาคม","มิถุนายน", "กรกฎาคม","สิงหาคม","กันยายน",
        "ตุลาคม","พฤศจิกายน","ธันวาคม");
        
var enmonth = new Array();
enmonth[1] = "Jan";
enmonth[2] = "Feb";
enmonth[3] = "Mar";
enmonth[4] = "Apr";
enmonth[5] = "May";
enmonth[6] = "June";
enmonth[7] = "July";
enmonth[8] = "Aug";
enmonth[9] = "Sep";
enmonth[10] = "Oct";
enmonth[11] = "Nov";
enmonth[12] = "Dec";

    var thmonth1 = new Array ("","ม.ค.","ก.พ.","มี.ค.",
        "เม.ย.","พ.ค.","มิ.ย.", "ก.ค.","ส.ค.","ก.ย.",
        "ต.ค.","พ.ย.","ธ.ค.");

    var thm=thmonth1[mm];
    var enm=enmonth[mm];

    if(dd<10) {
        dd='0'+dd
    } 

    if(h<10) {
        h='0'+h
    } 


    if(i<10) {
        i='0'+i
    } 

    if(mm<10) {
        mm='0'+mm
    } 
        
  
    Storage.prototype.setArray = function(key, obj) {
        return this.setItem(key, JSON.stringify(obj))
    }
    Storage.prototype.getArray = function(key) {
        return JSON.parse(this.getItem(key))
    }
    
    
 
    // Filter to convert HTML content to string by removing all HTML tags
    app.filter('htmlToPlaintext', function() {
        return function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
        }
    }
    );
    
    
    
    
    
    
     
  app.controller('networkController', function($scope){
    
    
       var lang= window.localStorage.getArray("lang");
               // window.localStorage.removeItem("lang");
               /// window.localStorage.setArray("lang","en");
                if(lang==null || lang==undefined){
                    window.localStorage.removeItem("lang");
                    lang="en";
                    window.localStorage.setArray("lang",lang);
                    
                } 
                
            //    var tran = new Array();
                var lang= window.localStorage.getArray("lang");
                 var tran= window.localStorage.getArray("tran");
                  if(tran==null || tran==undefined){
 
 
                        var tran= new Array();
                         tran['th']=new Array();
                         tran['en']=new Array();;

                         tran={"th":{
                        "samma_arahang" :  "สัมมาอะระหัง"
                        ,"key_to_success" :  "หยุด เป็นตัวสำเร็จ"
                         ,"record_samma" : "บันทึก สัมมาอะระหัง"
                         ,"meditation_sound":"เสียง นำนั่งสมาธิ"
                        ,"connect":"เชื่อมต่อ"
                        ,"howto":"วิธีการ สัมมาอะระหัง"
                        ,"menu_menu":"เมนู"
                        ,"menu_record":"บันทึก"
                        ,"menu_sound":"นำนั่ง"
                        ,"menu_connect":"เชื่อมต่อ"
                        ,"toolbar_record_samma_arahang":"บันทึกจำนวนสัมมาอะระหัง"
                        ,"num":"จำนวน"
                        ,"today":"วันนี้"
                        ,"times":"ครั้ง"
                        ,"record":"บันทึก"
                        ,"show":"แสดงผล"
                        ,"show_result_samma":"แสดงผลการสัมมาอะระหัง"
                        ,"all":"รวมทั้งหมด"
                        ,"minutes":"นาที"
                        ,"toolbar_meditation":"นำนั่งสมาธิ"
                        ,"connect_to_server":"เชื่อมต่อกับ dmc.tv"
                        ,"or_signup":"หรือ สมัครสมาชิก"
                        ,"toolbar_signup":"สมัครสมาชิก"
                        ,"fname":"ชื่อจริง"
                        ,"lname":"นามสกุล"
                        ,"logged":"เชื่อมต่อแล้ว"
                        ,"Backupmydata":"สำรองข้อมูลของฉัน"
                        ,"Backupmydata_done":"สำรองข้อมูล เรียบร้อยแล้ว"
                        ,"donwloadmydata":"เรียกข้อมูลของฉันจาก Server"
                        ,"donwloadmydata_done":"เรียกข้อมูลของฉันจาก Server เรียบร้อยแล้ว"
                        ,"stop_connect":"หยุดเชื่อมต่อ"
                        ,"reset_data":"Reset ข้อมูลทั้งหมด"
                        ,"cancel":"หยุดทำ"
                        ,"sure_to_delete_samma":"คุณจะลบ การสัมมาอะระหัง "
                        ,"failed_try_again":"ไม่สำเร็จ ลองใหม่อีกครั้ง"
                        ,"sure_to_reset":"แน่ใจไหมว่าจะลบข้อมูลในเครื่องของคุณ ?"
                        ,"done":"เรียบร้อยแล้ว !!"
                        },"en":{
                        "samma_arahang" :  "Samma Arahang"
                        ,"key_to_success" :  "Stillness is the key to success"
                         ,"record_samma" : "Record Counting"
                        ,"meditation_sound":"Meditation Sound"
                        ,"connect":"Connect to Server"
                        ,"howto":"How to Count Samma Arahang"
                        ,"menu_menu":"Menu"
                        ,"menu_record":"Record"
                        ,"menu_sound":"Sound"
                        ,"menu_connect":"Connect"
                        ,"toolbar_record_samma_arahang":"Record Samma Arahang Counting"
                        ,"num":"Amount"
                        ,"today":"Today"
                        ,"times":"times"
                        ,"record":"Record !"
                        ,"show":"Show Result"
                        ,"show_result_samma":"Show Counting Result"
                        ,"all":"Total"
                        ,"minutes":"mins"
                        ,"toolbar_meditation":"Meditation"
                        ,"or_signup":"or Sign up ?"
                        ,"toolbar_signup":"Sign up"
                        ,"fname":"First Name"
                        ,"lname":"Last Name"
                         ,"logged":"Connected"
                        ,"connect_to_server":"Connect"
                        ,"Backupmydata":"Back up my data"
                        ,"Backupmydata_done":"Back up data, done!"
                        ,"donwloadmydata":"Donwload my data"
                        ,"donwloadmydata_done":"Donwload my data, Done!!"
                        ,"stop_connect":"Disconnect !"
                        ,"reset_data":"Reset data"
                        ,"cancel":"Cancel"
                        ,"sure_to_delete_samma":"Are you sure to delete : "
                        ,"failed_try_again":"Failed, Try again !"
                        ,"sure_to_reset":"Are you sure to reset your local data?"
                        ,"done":"Done !!"
                        }
                        ,"jp":{"samma_arahang" :  "サンマーアラハン"
                        ,"key_to_success" :  "静止は成功の鍵"
                         ,"record_samma" : "サンマーアラハン登録"
                         ,"meditation_sound":"瞑想オーディオ"
                        ,"connect":"接続"
                        ,"menu_menu":"メニュー"
                        ,"menu_record":"登録"
                        ,"menu_sound":"オーディオ"
                        ,"menu_connect":"接続"
                        ,"howto":"方法"
                        ,"toolbar_record_samma_arahang":"サンマーアラハン数の登録"
                        ,"num":"回数"
                        ,"today":"今日"
                        ,"times":"回"
                        ,"record":"登録"
                        ,"show":"結果"
                        ,"show_result_samma":"サンマーアラハンの結果"
                        ,"all":"すべて"
                        ,"minutes":"分"
                        ,"toolbar_meditation":"瞑想"
                        ,"connect_to_server":" dmc.tvへ接続"
                        ,"or_signup":"or サインイン"
                        ,"toolbar_signup":"サインイン"
                        ,"fname":"名前"
                        ,"lname":"苗字"
                        ,"logged":"ログイン中"
                        ,"Backupmydata":"バックアップ"
                        ,"Backupmydata_done":"バックアップ完了"
                        ,"donwloadmydata":" サーバーからデータをダウンロード"
                        ,"donwloadmydata_done":"ダウンロード完了"
                        ,"stop_connect":"接続停止"
                        ,"reset_data":"すべてリセット"
                        ,"cancel":"キャンセル"
                        ,"sure_to_delete_samma":"サンマーアラハンのデータを消去"
                        ,"failed_try_again":"エラー　再度接続"
                        ,"sure_to_reset":"本当にリセットしますか?"
                        ,"done":"完了!!"}
                        ,"cn":{
                        "samma_arahang" :  "三玛阿罗汉"
                        ,"key_to_success" :  "静止乃成功之本"
                         ,"record_samma" : "记录“三玛阿罗汉"
                         ,"meditation_sound":"禅修引导"
                        ,"connect":"链接"
                        ,"menu_menu":"主页"
                        ,"menu_record":"记录"
                        ,"menu_sound":"引导"
                        ,"menu_connect":"链接"
                        ,"howto":"三玛阿罗汉 方法"
                        ,"toolbar_record_samma_arahang":"记录诵念“三玛阿罗汉”的总数"
                        ,"num":"总数"
                        ,"today":"今天"
                        ,"times":""
                        ,"record":"次数"
                        ,"show":"成果"
                        ,"show_result_samma":"三玛阿罗汉 的成果"
                        ,"all":"全部"
                        ,"minutes":"分钟"
                        ,"toolbar_meditation":"引导打坐"
                        ,"connect_to_server":"链接 dmc.tv"
                        ,"or_signup":"或 申请为成员"
                        ,"toolbar_signup":"申请成员"
                        ,"fname":"真名"
                        ,"lname":""
                        ,"logged":"姓"
                        ,"Backupmydata":"已经链接"
                        ,"Backupmydata_done":"已备份资料"
                        ,"donwloadmydata":"在服务器里提取我的资料"
                        ,"donwloadmydata_done":"已从服务器上提取我的资料"
                        ,"stop_connect":"开链接"
                        ,"reset_data":"全部资料"
                        ,"cancel":"取消"
                        ,"sure_to_delete_samma":"您将删除“三玛阿罗汉”"
                        ,"failed_try_again":"失败，请重试"
                        ,"sure_to_reset":"确定要删除您的资料?"
                        ,"done":"确定 !!"
                }
            
        
                    };
                    
                     window.localStorage.setArray("tran",tran);
                     var tran= window.localStorage.getArray("tran");
                     $scope.tran=tran[lang];
                  }
                     var tran= window.localStorage.getArray("tran");
                     $scope.tran=tran[lang];          
        data1= window.localStorage.getArray("times_count");
        //console.log(data1);
        if(data1==null){
            window.localStorage.removeItem("times_count");
            data2=[{
                "times":0,
                "rdate":"0000-00-00",
                "rtime":"00:00:00",
                "user_id":""
            }];
            window.localStorage.setArray("times_count",data2);
          //  console.log('Reset OK');
        }
        
     
     
          mp3=[{
                "media":"media/Sammaarahang.mp3",
                "name":tran[lang].meditation_sound+" "+tran[lang].samma_arahang,
                "duration":"10:06"
            },{
                "media":"media/10m1.mp3",
                "name": tran[lang].meditation_sound + "10" + tran[lang].minutes,
                "duration":"10:24"
            },{
                "media":"media/20m1.mp3",
                "name":tran[lang].meditation_sound + "20" + tran[lang].minutes,
                "duration":"20:15"
            }];
            window.localStorage.setArray("mp3",mp3);
           // console.log('Reset mp3 OK');
        
     

                
         
    ons.ready(function(){

    });

     // Check if is Offline
    
    document.addEventListener("offline", function(){

      //offlineMessage.show();
      $scope.isconnect="Offline Mode";
      /* 
       * With this line of code you can hide the modal in 8 seconds but the user will be able to use your app
       * If you want to block the use of the app till the user gets internet again, please delete this line.       
       */

      setTimeout('offlineMessage.hide()', 8000);  

    }, false);

    document.addEventListener("online", function(){
      // If you remove the "setTimeout('offlineMessage.hide()', 8000);" you must remove the comment for the line above      
      // offlineMessage.hide();
            $scope.isconnect="Online Mode";

    });

  });
  


 
    app.controller('welcome', function($scope) {

         
        var lang= window.localStorage.getArray("lang");
        var tran=window.localStorage.getArray("tran");
        
        $scope.tran=tran[lang];

    });
    
    
    

    app.controller('inputcomment', function($scope) {
  
        $scope.timenow=h+":"+i;
        $scope.today1=yyyy+"-"+mm+"-"+dd;

   var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
        //console.log ( moment($scope.today1, "YYYY-MM-DD").format("DD-MMMM-YYYY") +"XXXXXX"+$scope.today1 ); 

$scope.tran=tran[lang];

        $scope.addtimes = function(){
         //   console.log("a"+$scope.times+"b");
   var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
            var rdate1=document.getElementById("rdate").value;
            var rtime1=document.getElementById("rtime").value;
            var dReg= /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
            var tReg= /(2[0-3]|[01][0-9]):[0-5][0-9]/;
            var ttReg=/^[1-9]([0-9]*)$/;
            if(rdate1.match(dReg)&&rtime1.match(tReg) && $scope.times!==undefined && $scope.times.match(ttReg) ){
            
                 data1= window.localStorage.getArray("times_count");
                if(data1==null || data1==undefined){
                            data1=[{
                        "times":0,
                        "rdate":"0000-00-00",
                        "rtime":"00:00:00",
                        "user_id":""
                         }];
                }
                data1.push({
                    "times":$scope.times,
                    "rdate":rdate1,
                    "rtime":rtime1
                })
                window.localStorage.setArray("times_count",data1);
                $scope.ons.tabbar.loadPage('video.html');
            }else{
                
            }
        }
      
      
        $scope.resettimes = function(){
    
            window.localStorage.removeItem("times_count");
            data2=[{
                "times":0,
                "rdate":"0000-00-00",
                "rtime":"00:00:00",
                "user_id":""
            }]
            window.localStorage.setArray("times_count",data2);
         //   console.log('Reset OK');

        }

        var todaytimes=0;
        data1= window.localStorage.getArray("times_count");

        for (var ky in data1){

            if(data1[ky].rdate==$scope.today1 && data1[ky].markasdelete!==1 ){
                todaytimes=todaytimes+Number(data1[ky].times);
         //       console.log(todaytimes);

            }

        }
            
        $scope.ttimes=todaytimes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       // console.log("today = "+todaytimes);
                
      
    }); ///////// INPUT COMMENT

    
    
    
    
    
    
    app.controller('viewresult', function($scope) {
    
       var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
        data2= window.localStorage.getArray("times_count");
   
        var data_by_day = new Array();
        var show_day_data = new Array();
        var sumall=0;
        for (var k in data2){
           if(data2[k].markasdelete!==1){
        
            var newk=data2[k].rdate.toString();
                 
            //  console.log(data_by_day[newk]+"= 1 ="+data2[k].times+"="+data2[k]['rdate'] );

            if( data_by_day[newk] == undefined){
                data_by_day[newk]={
                    times:0,
                    rdate:newk,
                    thdate:""
                };
            }
              data_by_day[newk].times+=Number(data2[k].times);
              sumall+=Number(data2[k].times);
              
        var lang= window.localStorage.getArray("lang");

         if(lang=='th'){ 
            data2[k].thdate=moment(data2[k].rdate, "YYYY-MM-DD").format("DD")+" "+thmonth1[moment(data2[k].rdate, "YYYY-MM-DD").format("M")]+" "+moment(data2[k].rdate, "YYYY-MM-DD").format("YYYY");
         }else if(lang=='en'){ 
            data2[k].thdate=moment(data2[k].rdate, "YYYY-MM-DD").format("DD")+" "+enmonth[moment(data2[k].rdate, "YYYY-MM-DD").format("M")]+" "+moment(data2[k].rdate, "YYYY-MM-DD").format("YYYY");
         }else{
            data2[k].thdate=moment(data2[k].rdate, "YYYY-MM-DD").format("DD")+" "+enmonth[moment(data2[k].rdate, "YYYY-MM-DD").format("M")]+" "+moment(data2[k].rdate, "YYYY-MM-DD").format("YYYY");
             
         }
         data_by_day[newk].thdate=data2[k].thdate;
                 
            //console.log(data_by_day[newk].times+"= 2 ="+data2[k].times+"="+data_by_day[newk].thdate );
                
            if(data2[k].times==0 || data2[k].times==null ||data2[k].times==undefined){
                data2.splice(k, 1);
            }else{
                 if(lang=='th'){ 
                        data2[k].thdate=moment(data2[k].rdate, "YYYY-MM-DD").format("DD")+" "+thmonth1[moment(data2[k].rdate, "YYYY-MM-DD").format("M")]+" "+moment(data2[k].rdate, "YYYY-MM-DD").format("YYYY");
                 }else if(lang=='en'){ 
                        data2[k].thdate=moment(data2[k].rdate, "YYYY-MM-DD").format("DD")+" "+enmonth[moment(data2[k].rdate, "YYYY-MM-DD").format("M")]+" "+moment(data2[k].rdate, "YYYY-MM-DD").format("YYYY");
                 }else{
                        data2[k].thdate=moment(data2[k].rdate, "YYYY-MM-DD").format("DD")+" "+enmonth[moment(data2[k].rdate, "YYYY-MM-DD").format("M")]+" "+moment(data2[k].rdate, "YYYY-MM-DD").format("YYYY");
                 }
             }
           }/// markasdelete  
        }
          $scope.sumall=sumall;
        var ok_data = new Array();
        for (var k in data_by_day){
            if(data_by_day[k].times!==0 && data_by_day[k].times!=null && data_by_day[k].times!==undefined){
                ok_data.push({
                    times:data_by_day[k].times ,
                    rftimes:data_by_day[k].times.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    rdate:data_by_day[k].rdate,
                    thdate:data_by_day[k].thdate
                });
            }
        }

        $scope.items=ok_data;

        window.localStorage.setArray("times_count",data2);
        window.localStorage.setArray("times_by_day",data_by_day);
 
 
 
        $scope.showdate=function(rdate){
         var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
            g_rdate=rdate;
            
            $scope.ons.tabbar.loadPage('showdate.html');
            
        }
           
   if(lang=='th'){
        $scope.thdate1=moment(g_rdate, "YYYY-MM-DD").format("DD")+" "+thmonth1[moment(g_rdate, "YYYY-MM-DD").format("M")]+" "+moment(g_rdate, "YYYY-MM-DD").format("YYYY");
   }else if(lang=='en'){
        $scope.thdate1=moment(g_rdate, "YYYY-MM-DD").format("DD")+" "+enmonth[moment(g_rdate, "YYYY-MM-DD").format("M")]+" "+moment(g_rdate, "YYYY-MM-DD").format("YYYY");
   }else{
        $scope.thdate1=moment(g_rdate, "YYYY-MM-DD").format("DD")+" "+enmonth[moment(g_rdate, "YYYY-MM-DD").format("M")]+" "+moment(g_rdate, "YYYY-MM-DD").format("YYYY");
   }
   
   var sum_day=0;
        for (var k in data2){
         if(data2[k].markasdelete!==1){
    
            var newk=data2[k].rdate.toString();
                 
            if( newk == g_rdate ){
                show_day_data.push({
                    times:data2[k].times,
                    rtime:data2[k].rtime.toString(),
                    rdate:g_rdate,
                    gkey:k,
                    rftimes:data2[k].times.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                });
                if(data2[k].times!==null){
                    sum_day+=Number(data2[k].times);
                }
              //  console.log("Time: "+Number(data2[k].times)+"-"+sum_day);
            }
         }///mark as delete
        }
        $scope.sumday=sum_day.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $scope.items2=show_day_data;
       var lang= window.localStorage.getArray("lang");
          var tran= window.localStorage.getArray("tran");

          
        $scope.confirm = function(rttime,ikey) {
         //   console.log("delete key = "+ikey);
            var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
            ons.notification.confirm({
                message: ""+ tran[lang].sure_to_delete_samma+" "+rttime+" "+tran[lang].times+" ?",
                callback: function(idx) {
                    switch(idx) {
                        case 0:
                            break;
                        case 1:
                           // data2.splice(ikey, 1);
                            data2[ikey].markasdelete=1;
                            window.localStorage.setArray("times_count",data2);
                            $scope.ons.tabbar.loadPage('showdate.html');
                            break;
                    }
                }
            });
        }



   
    }); //// VIEW RESULT
    
    
    
    
    app.controller('viewmp3', function($scope) {
    
       var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
        $scope.mp3s=ls.getArray("mp3");
   
        $scope.showmp3=function(key){
            mp3_key=key;
       //     console.log("sending  key : "+mp3_key);
            $scope.ons.tabbar.loadPage('radio.html');
        }
        
    });
            
    
    
       
    // Radio Controller
    var radio = null;
    var isPlaying = false;

    app.controller('radioController', function($scope, $sce, ngAudio){
           var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
        var mp3allfile=ls.getArray("mp3");

        var mp3file=mp3allfile[mp3_key];
        var mp3playingkey=ls.getArray("mp3playingkey");
        // console.log(mp3playingkey);
      
     //   console.log("request key : "+mp3_key);
    
        $scope.buttonIcon = '<span class="ion-ios-play"></span>';

        $scope.radioOptions = {
            albumArt: 'media/cover.jpg',
            songName: mp3file.name
        }
 

        if (radio!==null) {  ///second time
             
       //     console.log("second : lastfile = " + mp3allfile[mp3playingkey].media + " requst = "+ mp3file.media);

            if(mp3playingkey!==mp3_key){ /// not same file
                 
          //      console.log("Not the same file");
                if(isPlaying){
                    
                    radio.stop();
                    $scope.buttonIcon = '<span class="ion-ios-play"></span>';

                }else{
                     
                    $scope.buttonIcon = '<span class="ion-ios-play"></span>';
                      
                }
                
                isPlaying = false;
                 
                $scope.radio = ngAudio.load(mp3file.media);
                radio = $scope.radio;
                 
            }else{ //samefile
                
         //       console.log("Same file");

                $scope.radio = radio;

                if(isPlaying){
                    $scope.buttonIcon = '<span class="ion-ios-pause"></span>';
                } else {
                    $scope.buttonIcon = '<span class="ion-ios-play"></span>';
                }
            }
        
           
            
            
        } else { // open firsttime
         //   console.log("First : " +mp3file.media);
            isPlaying = false;
            
            $scope.radio = ngAudio.load(mp3file.media);
            radio = $scope.radio;
        }
        
        
        window.localStorage.setArray("mp3playingkey",mp3_key);
    //    console.log("store key : "+ mp3_key)
      
        
        

        $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };

        $scope.startRadio = function(){

            if(!isPlaying){
                // Let's play it
                isPlaying = true;
                radio.play();

                $scope.buttonIcon = '<span class="ion-ios-pause"></span>';
                $scope.isFetching = true;

            } else {
                // Let's pause it
                
                isPlaying = false;
                radio.pause();
                $scope.buttonIcon = '<span class="ion-ios-play"></span>';

            }

        }

    
    

    });

    var pad2 = function(number){
        return (number<10 ? '0' : '') + number;
    }

    app.filter('SecondsToTimeString', function() {
        return function(seconds) {
            var s = parseInt(seconds % 60);
            var m = parseInt((seconds / 60) % 60);
            var h = parseInt(((seconds / 60) / 60) % 60);
            if (seconds > 0) {
                return pad2(h) + ':' + pad2(m) + ':' + pad2(s);
            } else {
                return '00:00:00';
            }
        }
    });
  
  
  
  
    app.controller('loginpage', function($scope,$http) {
       var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
        var user_profile=ls.getArray("user_profile");

        if(user_profile!==null){ /// Logged in
            /// go to profile page
            $scope.ons.tabbar.loadPage('profile.html');
        }
     
        $scope.dologin=function(){
        
            ons.modal.show();

            var email=document.getElementById('email_user').value;
            var password=document.getElementById('password_user').value;
            var passhash = CryptoJS.MD5(password);
      

            $http.get('http://www.dmc.tv/member/login_api.php?email='+email+'&pass='+passhash).
            success(function(data, status, headers, config) {
        var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");

                ons.modal.hide();
     
                if(data.success){
                    window.localStorage.setArray("user_profile",data);
                    $scope.ons.tabbar.loadPage('profile.html');
            
                }else{
                    ons.notification.alert({
                        title: 'Login',
                        message: ""+ tran[lang].failed_try_again 
                    });
                }


            }).
            error(function(data, status, headers, config) {
        //        console.log("Error post");
           var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
                ons.modal.hide();
                ons.notification.alert({
                    title: 'Error',
                    message: ""+ tran[lang].failed_try_again
                });

            });
        
        //    console.log("after req");

        }
        
        
    });
  
  
  
  
  
  
    
    app.controller('profile', function($scope,$http) {
    
        var user_profile=ls.getArray("user_profile");
        
       var datac=ls.getArray("times_count");
       var sumall=0;
       
        for (var k in datac){
           if(datac[k].markasdelete!==1){
        
              sumall+=Number(datac[k].times);
           }
        }
        $scope.sumall=sumall;
        
        if(user_profile!==null){ /// Logged in
          
           $scope.email=user_profile.email;
           
        }else{
            ons.tabbar.setActiveTab(3);
        }
     

        var tran= window.localStorage.getArray("tran");
        var lang= window.localStorage.getArray("lang");


        $scope.logout=function(){
                    var tran= window.localStorage.getArray("tran");
                var lang= window.localStorage.getArray("lang");

             ons.notification.confirm({
                  title: 'Logout',
                  message: ""+ tran[lang].stop_connect+' ?',
                callback: function(idx) {
                    switch(idx) {
                        case 0:
                            break;
                        case 1:
                               
                        window.localStorage.removeItem("user_profile");
                            ons.notification.alert({
                                    title: 'Logged out',
                                    message: ""+  tran[lang].stop_connect
                                });
                        ons.tabbar.setActiveTab(0);
                    }
                }
             });

        }
        
        
           var data1= window.localStorage.getArray("times_count");
           var data2= window.localStorage.getArray("times_count");
            var user_profile=ls.getArray("user_profile");
         
            
       $scope.upload = function() {
                var tran= window.localStorage.getArray("tran");
                var lang= window.localStorage.getArray("lang");

            ons.notification.confirm({
                  title: 'Backup',
                  message: ""+  tran[lang].Backupmydata + ' ?',
                callback: function(idx) {
                    switch(idx) {
                        case 0:
                            break;
                        case 1:
                               
                               ons.modal.show();
                               
                                    var ok;
                                    ok="[";
                                    var i=1;

                                    for (var k in data2){

                                        if(i==1){
                                            var comma="";
                                        }else{
                                            var comma=",";
                                        }
                                        i++;  
                                        if(data2[k].markasdelete==undefined){
                                            var mkd=0;
                                        }else{
                                            var mkd=1;
                                        }
                                        ok+=comma+"{\"times\":"+data2[k].times+","+"\"rdate\":\""+data2[k].rdate+"\","+"\"rtime\":\""+data2[k].rtime+"\","+"\"markasdelete\":"+mkd+"}"

                                    }

                                    ok+="]";
                         //       console.log(ok);
                         //       console.log("sending post.... uid:"+user_profile.user_id);
                                
                              $http({
                                url: 'http://www.dmc.tv/member/api_sync.php',
                                method: "POST",
                                data: 
                                    $.param({
                                        data: ok,
                                        job:'upload',
                                        key:user_profile.key,
                                        user_id:user_profile.user_id
                                    })
                                ,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                            }).
                            success(function(data, status, headers, config) {
                               var lang= window.localStorage.getArray("lang");
                                var tran= window.localStorage.getArray("tran");
                         //       console.log(data.success+" D: "+data.data);
                              if(data.success){     
                                 ons.notification.alert({
                                    title: 'Back up',
                                    message: ""+  tran[lang].Backupmydata_done
                                });
                                var data3 = new Array();
                                 for (var k in data2){
                                     if(data2[k].markasdelete!==1){
                                         data3.push( {
                                            "times":data2[k].times,
                                            "rdate":data2[k].rdate,
                                            "rtime":data2[k].rtime
                                        });
                                     }
                                  }
                                window.localStorage.setArray("times_count",data3);

                              }else{
                                ons.modal.hide();
                                ons.notification.alert({
                                    title: 'Back up',
                                    message: ""+ "Failed, Try again."
                                });
                              }
                                ons.modal.hide();
                            
                                
                            }).
                            error(function(data, status, headers, config) {
                         //       console.log("Error post");
                            var lang= window.localStorage.getArray("lang");
                        var tran= window.localStorage.getArray("tran");
                                ons.modal.hide();
                                ons.notification.alert({
                                    title: 'Error',
                                    message: ""+ "No Internet Connection"
                                });
                                            ons.modal.hide();


                            });
                     }
                }
            });
            
            
            
        } /// end upload
     
       
            
         $scope.download = function() {
                var tran= window.localStorage.getArray("tran");
                var lang= window.localStorage.getArray("lang");
            var data2= window.localStorage.getArray("times_count");
            var user_profile=ls.getArray("user_profile");
            
            data2.push({
                "times":0,
                "rdate":"0000-00-00",
                "rtime":"00:00:00",
                "user_id":""
            });
            
            ons.notification.confirm({
                  title: 'Download',
                  message: ""+ tran[lang].donwloadmydata +' ?',
                callback: function(idx) {
                    switch(idx) {
                        case 0:
                            break;
                        case 1:
                         //      console.log("fetching data...");
                            ons.modal.show();
                                
                              $http({
                                url: 'http://www.dmc.tv/member/api_sync.php',
                                method: "POST",
                                data: 
                                    $.param({
                                        job:'download',
                                        key:user_profile.key,
                                        user_id:user_profile.user_id
                                    })
                                ,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                            }).
                            success(function(data, status, headers, config) {
                         //       console.log(data.success+" M: "+data.message);
                                 var lang= window.localStorage.getArray("lang");
                                var tran= window.localStorage.getArray("tran");
                              if(data.success){     
                                  
                                   ons.notification.alert({
                                    title: 'Download',
                                    message: ""+ tran[lang].donwloadmydata_done
                                });
                                
                                  var datax=data.data;
                                  // var data3 = new Array();
                                for (var k in datax){
                                    
                                           var dont_add=0;

                                       loop2:
                                       for (var k2 in data2){
                                         //  console.log(data2[k2].times+"=="+datax[k].times +"=="+ data2[k2].rdate+"=="+datax[k].rdate +"=="+ data2[k2].rtime+"=="+datax[k].rtime);
                                        if( data2[k2].markasdelete!==1 ){ // 
                                            if(data2[k2].times==datax[k].times && data2[k2].rdate==datax[k].rdate && data2[k2].rtime==datax[k].rtime  ){
                                               /// donothing
                                                dont_add=1;
                                            //   break loop2;
                                               
                                             }else{
                                               /// push
                                               var must_add=1;
                                               
                                             }
                                              
                                           }//markasdelete
                                           
                         //                 console.log("ALL " + data2[k2].times+"=="+datax[k].times +"=="+ data2[k2].rdate+"=="+datax[k].rdate +"=="+ data2[k2].rtime+"=="+datax[k].rtime);

                                        }

                                        if(dont_add==1){}else{
                                              
                         //                     console.log("MUST ADD" + data2[k2].times+"=="+datax[k].times +"=="+ data2[k2].rdate+"=="+datax[k].rdate +"=="+ data2[k2].rtime+"=="+datax[k].rtime);
                                              data2.push( {
                                                "times":datax[k].times,
                                                "rdate":datax[k].rdate,
                                                "rtime":datax[k].rtime
                                                }); 
                                                
                                        }
                                }
                                window.localStorage.setArray("times_count",data2); 
                                 ons.tabbar.setActiveTab(1);

                              }else{
                                ons.modal.hide();
                                ons.notification.alert({
                                    title: 'Download',
                                    message: ""+ "Failed,Try again."
                                });
                              }
                                ons.modal.hide();
                            
                                
                            }).
                            error(function(data, status, headers, config) {
                         //       console.log("Error post");
                            var lang= window.localStorage.getArray("lang");
                          var tran= window.localStorage.getArray("tran");
                                ons.modal.hide();
                                ons.notification.alert({
                                    title: 'Error',
                                    message: ""+ "No Internet Connection"
                                });
                                            ons.modal.hide();


                            });
                     }
                }
            });
            
            
            
        } /// end DL
        
        
             $scope.resetdata = function() {
                 var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
            ons.notification.confirm({
                 title: 'Reset data',
                 message: ""+ tran[lang].sure_to_reset ,
                callback: function(idx) {
                    switch(idx) {
                        case 0:
                            break;
                        case 1:
             window.localStorage.removeItem("mp3");
            mp3=[{
                "media":"media/Sammaarahang.mp3",
                "name":tran[lang].meditation_sound+" "+tran[lang].samma_arahang,
                "duration":"10:06"
            },{
                "media":"media/10m1.mp3",
                "name": tran[lang].meditation_sound + "10" + tran[lang].minutes,
                "duration":"10:24"
            },{
                "media":"media/15.36Min.mp3",
                "name": tran[lang].meditation_sound + "15" + tran[lang].minutes,
                "duration":"15:36"
            },{
                "media":"media/20m1.mp3",
                "name":tran[lang].meditation_sound + "20" + tran[lang].minutes,
                "duration":"20:15"
            },{
                "media":"media/30m1.mp3",
                "name": tran[lang].meditation_sound + "35" + tran[lang].minutes,
                "duration":"35:11"
            },{
                "media":"media/60m.mp3",
                "name": tran[lang].meditation_sound + "60" + tran[lang].minutes,
                "duration":"60:00"
            }];
            window.localStorage.setArray("mp3",mp3);
     //       console.log('Reset mp3 OK');
            
             window.localStorage.removeItem("times_count");
            data2=[{
                "times":0,
                "rdate":"0000-00-00",
                "rtime":"00:00:00",
                "user_id":""
            }];
            window.localStorage.setArray("times_count",data2);
            // window.localStorage.removeItem("user_profile");
     //       console.log('Reset OK');
            
            ons.notification.alert({
                                title: 'Reset',
                                message: ""+ 'Done !!'
               });
             ons.tabbar.setActiveTab(0);
             break;
                    }
                }
            });
        
    }/// End reset data
        
    });
    
    
    
    
    
    
    
  
    app.controller('signuppage', function($scope,$http) {
    
         
        $scope.dosignup=function(){
        
            ons.modal.show();

            var fname=document.getElementById('fname').value;
            var lname=document.getElementById('lname').value;
            fname=fname+" "+lname; 
            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;
        var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");


            $http.get('http://www.dmc.tv/member/api_signup.php?email='+email+'&password='+password+'&username='+fname).
            success(function(data, status, headers, config) {
               var lang= window.localStorage.getArray("lang");
             var tran= window.localStorage.getArray("tran");
                ons.modal.hide();
                
                if(data.success){
                  // console.log(" Success"+data.message);

                   ons.notification.alert({
                        title: 'Sign up',
                        message: ""+ tran[lang].done
                    });    
                    window.localStorage.setArray("user_profile",data);
                    $scope.ons.tabbar.loadPage('profile.html');
            
                }else{
                  //  console.log("Not Success"+data.message);

                    ons.notification.alert({
                        title: 'Sign up',
                        message: ""+ data.message
                    });
                }


            }).
            error(function(data, status, headers, config) {
             //   console.log("Error post");
                var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
                ons.modal.hide();
                ons.notification.alert({
                    title: 'Error',
                    message: ""+ "No Internet Connection"
                });

            });
        
        //    console.log("after req");

        }
        
        
    });
    
    
    
    
         app.controller('setting', function($scope) {
                
               var lang= window.localStorage.getArray("lang");
               var tran= window.localStorage.getArray("tran");
            
                if(lang==null || lang==undefined){
                    window.localStorage.removeItem("lang");
                    lang="th";
                    window.localStorage.setArray("lang",lang);
                }
                
             if(lang=='th'){
                     document.getElementById("th").checked = true;
             }else if (lang=='en'){
                     document.getElementById("en").checked = true;
             }else if (lang=='cn'){
                     document.getElementById("cn").checked = true;
             }else if (lang=='jp'){
                     document.getElementById("jp").checked = true;
             }else{
                     document.getElementById("th").checked = true;
             }
             
              $scope.set_to = function(lang1) {
                      window.localStorage.removeItem("lang");
                      window.localStorage.setArray("lang",lang1);
                      //ons.tabbar.loadPage('setting.html');
                       window.location.reload();
              }
   
              $scope.resetdata = function() {
                 var lang= window.localStorage.getArray("lang");
           var tran= window.localStorage.getArray("tran");
            ons.notification.confirm({
                 title: 'Reset data',
                 message: ""+ tran[lang].sure_to_reset ,
                callback: function(idx) {
                    switch(idx) {
                        case 0:
                            break;
                        case 1:
            
            
            ons.notification.alert({
                                title: 'Reset',
                                message: ""+ 'Done !!'
               });
             ons.tabbar.setActiveTab(0);
             break;
                    }
                }
            });
        
    }/// End reset data


         });
    
    
    
})();




