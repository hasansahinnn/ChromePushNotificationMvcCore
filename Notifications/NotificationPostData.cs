using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Resources.Notifications
{
    public class NotificationPostData
    {
        [JsonProperty(PropertyName = "registration_ids")]
        public List<string> FcmTokens { get; set; }

        [JsonProperty(PropertyName = "data")]
        public NotificationMessageData MessageData { get; set; }
    }
}
