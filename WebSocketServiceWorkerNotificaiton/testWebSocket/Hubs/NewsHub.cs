using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace testWebSocket.Hubs
{
    public class NewsHub : Hub
    {
        public void Send(string link, string message)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.addNewMessageToPage(link, message);
           // Clients.All.broadcastMessage(link, message);

           


        }

      
    }
}