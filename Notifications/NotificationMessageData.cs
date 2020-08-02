using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Resources.Notifications
{
    public class NotificationMessageData
    {
        [JsonProperty(PropertyName = "action")]
        public string Action { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "message")]
        public string Message { get; set; }

        [JsonProperty(PropertyName = "image")]
        public string Image { get; set; }

        [JsonProperty(PropertyName = "link")]
        public string Link { get; set; }
    }
}
