using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace testWebSocket.Hubs
{
    public class PushHub : Hub
    {
        public void SendNotification(string link, string message)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage(link, message);
           // Clients.All.broadcastMessage(link, message);

        }



        
    }







}