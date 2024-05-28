import axios from "axios";

export default function SlackAlert(uid,errCode,reason,raw){

    var data = new URLSearchParams(raw);
    data.set('path', 'p')
    axios
    .get(
      `https://online-qr-generator.com/api/qr-code?uId=` +
        uid +
        "&" +
        data.toString()
    )
    .then((result) => {
       if(result.status !== 200){
        message();
       }
     
    })
    .catch((err) => {
        message();
    });

    const message = (err, raw) => {
    fetch("https://hooks.slack.com/services/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",{
            method:"POST",
            headers: {
                "Accept": "*/*",
            },
            body:JSON.stringify({
                "blocks": [
                    {
                        "type": "header",
                        "text": {
                        "type": "plain_text",
                        "text": ":warning: :rotating_light: A critical priority issue has been identified.",
                        "emoji": true
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                        "type": "mrkdwn",
                        "text": `QR Code Scanned Error -  <https://scanned.page/p/${uid}|View QR>`
                        }
                    },
                    {
                        "type": "section",
                        "fields": [
                            {
                                "type": "mrkdwn",
                                "text": `*Error Code:*\n${errCode}`
                            },
                            {
                                "type": "mrkdwn",
                                "text": `*Reason:*\n${reason}`
                            }
                        ]
                    },
                    {
                        "type": "section",
                        "text": {
                        "type": "mrkdwn",
                        "text": "Action Required: Immediate attention and resolution are imperative."
                        }
                    }

                ]
            }),
        }).catch((err)=>{console.log(err);})
    }
  
}