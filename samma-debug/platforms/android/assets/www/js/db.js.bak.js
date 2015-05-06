
var db = window.openDatabase("dmc_database", "1.0", "DMC database", 20*1024*1024);

db.transaction(function(tx){
    



tx.executeSql("create table  dmcrec  ( id INTEGER , timeas INTEGER )", [], function(tx,results){
             
             
                console.log("Adding done");

            });
          //  tx.executeSql("INSERT INTO records (id,times,rdate,rtime,user_id,public) VALUES ('','120',CURDATE(),CURTIME(),'','0')");
          //  tx.executeSql("INSERT INTO records (id,times,rdate,rtime,user_id,public) VALUES ('','125',CURDATE(),CURTIME(),'','1')");


         /*   tx.executeSql("SELECT times from records", [], function(tx,results){
                console.log("listing start");

                var len = results.rows.length;
                console.log("listing start");

                for (var i=0; i<len; i++) {
                    console.log(results.rows.item(i));
                    $scope.items = results.rows.item(i);
                }
                console.log("listing done");

            }); */
        
        
        },function(tx,error){
    
            console.log("bDatabase Error: " + error);

},function(tx,error){
    
            console.log("DONE");

});
