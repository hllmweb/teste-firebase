/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        // info = null;
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //alert(device.model);

        // if(!localStorage.getItem("rp_data")) {
        //     var rp_data = {data: []};
        //     localStorage.setItem("rp_data", JSON.stringify(rp_data));
        //   }
    
        //   info = JSON.parse(localStorage.getItem("rp_data"));
    

        window.FirebasePlugin.hasPermission(function(data){
            console.log(data.isEnabled);
        },function(error){
            console.error(error);
        });
    
        window.FirebasePlugin.getToken(function(token) {  
            elemento = document.querySelector("#register_id");
            elemento.value = token;
            console.log(token);
            // ok = window.FirebasePlugin.subscribe('android');
            // console.log("aqui subscribe"+ok);
        }, function(error) {                
            console.error(error);           
        });  

        window.FirebasePlugin.getToken(function(token){
            // upload token to server
            console.log(token);
        });
    



        // window.FirebasePlugin.OnNotificationOpen.register(app.successHandler, app.errorHandler 

    //    window.FirebasePlugin.onNotificationOpen(function(notification) {
    //         // window.FirebasePlugin.subscribe('all');
    //         //console.log(notification);
    //         /*if(notification.tap == true){

    //         }else if(notification.tap == false){
    //             json = document.querySelector("#json");
    //             json.innerHTML = JSON.stringify(notification);
    //         }*/
           
    //         /*json = document.querySelector("#json");
    //         json.innerHTML = JSON.stringify(notification);*/
    //         if(!notification.tap){
    //             //alert("primeiro plano, app aberto na tela");
    //             //console.log(JSON.stringify(notification));
    //             //var jsonData = JSON.stringify(notification);
    //             // jsonData = {
    //             //     'title': notification.title,
    //             //     'body': notification.body
    //             // }

    //             //window.FirebasePlugin.onNotificationOpen().subscribe((jsonData) => {
    //                alert("ok, app aberto na tela");
    //                console.log(JSON.stringify(notification));
    //                alert(notification.title+notification.body);
    //             //});
    //         }else{
    //             alert("app fechado, mas aberto");
    //             console.log(JSON.stringify(notification));
    //         }
    //         console.log(notification);
        
    //         // window.FirebasePlugin.onNotificationOpen().subscribe((jsonData) => {
    //         //     alert("ok, observando notificacao");
    //         //     console.log(JSON.stringify(jsonData));
    //         // });


    //     }, function(error) {
    //         console.error(error);
    //     });
        
    window.FirebasePlugin.onNotificationOpen(function(notification) {
        //const subscriber = notification.registration_ids;
        console.log(JSON.stringify(notification));
        
        if(!notification.tap){
            navigator.notification.alert(
                //message
                notification.title,
                //callback
                false,
                //title
                notification.body,               
                //button
                "OK"
            );
        }else{
            alert("app fechado, mas aberto");
            console.log(JSON.stringify(notification));
        }
        
        //window.FirebasePlugin.onNotificationOpen().subscribe((notification) => {
         
            // alert.present();
            
        //});

      }, function(error) {
            console.error(error);
      });
        
        // cordova.plugins.notification.local.getAll(function (data) {
        // //    for(int i=0; i<=data.length; i++) //data retorna o array de alertas com seus objetos
        //     console.log(data.length); // retorna a quantidade exata de alertas
        // });



        //evento é acionado e mostra o lembrete que está sendo acionado quando app ta aberto 
        cordova.plugins.notification.local.on("trigger", function(info_notification) {
            //alert("triggered: " + notification.id);
            // alertas = document.querySelector("#alertas");
            // alertas.innerHTML = JSON.stringify(notification);
            console.log("notificacao acionada "+JSON.stringify(info_notification));
            //alert(notifications.length);
        });
            


        //let _60_seconds_from_now = new Date(new Date().getTime() + 3600);

       

        //evento é acionado e mostrado o lembrete quando clica na notificação
        // cordova.plugins.notification.local.on("click", (info_notification, state) => {
        //     //alert("triggered: " + notification.id);
        //     // alertas = document.querySelector("#alertas");
        //     // alertas.innerHTML = JSON.stringify(notification);
        //     console.log("notificacao clicada "+info_notification.data);
        //     console.log(state);
        // });
            
        //liberar a notificação da central de notifcações
        // cordova.plugins.notification.local.on('yes', function (notification, eopts) {
        //     console.log("foi marcado com sim a notificacao"+ notification);
        //     console.log("o que e isso", eopts);
        // });

        //se a pessoa clicar em não, exibir o lembrete pertencente a notificação que foi acionada
        // e foi marcada com não 
        // cordova.plugins.notification.local.on('no', function (notification, eopts) {
        //     console.log("foi marcado com não a notificacao"+ notification);
        //     console.log("o que e isso", eopts);
        // });
        // cordova.plugins.notification.local.getAll(function (data) {
        //     //    for(int i=0; i<=data.length; i++) //data retorna o array de alertas com seus objetos
        //         console.log(data.length); // retorna a quantidade exata de alertas
        //         console.log("lista todas as notificações "+JSON.stringify(data));
        // });

        //https://github.com/katzer/cordova-plugin-local-notifications/wiki/11.-Samples
        //Consultar todas as notificações acionadas
        // cordova.plugins.notification.local.getTriggered(function (notifications) {
        //     alert(notifications.length);
        // });

        // cordova.plugins.notification.local.cancel(0,function(){
        //     console.log("notificacao cancelada");
        // });

 
        // cordova.plugins.notification.local.getAll(function (data) {
        //     //    for(int i=0; i<=data.length; i++) //data retorna o array de alertas com seus objetos
        //         console.log("listando novamente as notificações");
        //         console.log(data.length); // retorna a quantidade exata de alertas
        //         console.log("lista todas as notificações "+JSON.stringify(data));
        // });
        this.addNotificacaoSegundos();
        this.receivedEvent('deviceready');
  
    },
    PushLocalNotification: function(){
        // var now = new Date().getTime(),
        //     _60_seconds_from_now = new Date(now + 60*1000);


        // cordova.plugins.notification.local.schedule([
        //     {
        //         id: 1,
        //         title: 'Lembrete Bianca 10',
        //         text: 'Bebe água porra',
        //         repeat:  'minutely',
        //         date:    _60_seconds_from_now,
        //         //trigger: { in: 1, unit: 'hour' }
        //         //trigger: { in: 1, unit: 'minute' }
        //         //trigger: { every: { month: 3, day: 2, hour: 14, minute: 59 } },
        //         actions: [
        //             { id: 'yes', title: 'SIM' },
        //             { id: 'no',  title: 'NÃO' }
        //         ]
              
        //     },{
        //         id: 2,
        //         title: 'Lembrete Bianca 11',
        //         text: 'Bebe água',
        //         //trigger: { in: 1, unit: 'hour' }
        //         //trigger: { in: 1, unit: 'minute' }
        //         trigger: { every: { month: 3, day: 2, hour: 14, minute: 57 } },
        //         actions: [
        //             { id: 'yes', title: 'SIM' },
        //             { id: 'no',  title: 'NÃO' }
        //         ]
               
        //     }]);
        

        //var array_list = [id, title, text];
        // info.data[info.data.length] = array_list;
        //localStorage.setItem("rp_data",JSON.stringify(info));


        var now = new Date().getTime(),
        _5_sec_from_now = new Date(now + 5*1000);

        cordova.plugins.notification.local.schedule({
            id: "7",
            text: "Delayed Notification",
            at: _5_sec_from_now
        });

        navigator.notification.alert("Lembrete adicionado com sucesso!");
        // cordova.plugins.notification.local.on("schedule", function(data) {
        //     console.log("scheduled: " + data);
        //     // alertas = document.querySelector("#alertas");
        //     // alertas.innerHTML = JSON.stringify(notification);

        //     // alert(notification);
        // });

        // cordova.plugins.notification.local.on("trigger", function(notification) {
        //     alert("triggered: " + notification.id);
        //     // alertas = document.querySelector("#alertas");
        //     // alertas.innerHTML = JSON.stringify(notification);
        // });


    },
    addNotificacaoSegundos: function(){
        //var now = new Date();
        //var _10_segundos = now.setSeconds(now.getSeconds() + 10);
        // var now = new Date().getTime(),
        //     _60_seconds_from_now = new Date(now * 60*1000);
        
        cordova.plugins.notification.local.schedule({
            id:    1,
            title: 'Reunião da Equipe',
            // text:  'Não esqueça de comprar algumas flores.',
            // trigger: {
            //     //firstAt: date,
            //     weekday: 5,
            //     every: {month: 3, day: 2, hour: 16, minute: 60},
            //     count: 365
            // }
            //trigger: {every: {hour: 18, minute: 19}, count: 365},
            //repeat:  "secondly"
            // date:    _60_seconds_from_now
            // trigger: { in: 1, unit: 'minute' }

            //Repetir a partir de agora
            trigger: {
                // every: 'day', count: 5 
                trigger: {every: {in: 1, unit: 'second'}, count: 5}
            }

            // trigger: {
            //     every: {
            //       weekday: 5,
            //       hour: 19,
            //       minute: 0,
            //     },
            //     count: 365,
            //   }
        });

        navigator.notification.alert("Alerta Marcado!");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();