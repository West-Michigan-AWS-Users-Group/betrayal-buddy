## Set Up Webhook for Discord notifications
Follow the instructions [here](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

Save your webhook URL.

Repeat twice. Once for GitHub commit notifications and one for app notifications from Betrayal Buddy.


## Test your Webhook

```bash
#!/bin/bash

WEBHOOK_URL="your webhook url here"

# Define your JSON payload
PAYLOAD='{
  "content": "This is a test message from a bash script"
}'

# Send the POST request to the Discord webhook
curl -X POST -H "Content-Type: application/json" -d "$PAYLOAD" "$WEBHOOK_URL"


```