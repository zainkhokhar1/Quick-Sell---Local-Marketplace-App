import { formatDuration, formatNow } from "../utils/timeFormatter.js";

export const logger = (req, res, next) => {

    const startTime = Date.now();

    res.on('finish', () => {
    const duration = formatDuration(Date.now() - startTime);

    console.log(duration)

        console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 
📥 Incoming Request
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🕒 Time        : ${formatNow(Date.now())}
🌐 Method      : ${req.method}
🔗 URL         : ${req.originalUrl}
📡 IP          : ${req.ip}
📦 Status      : ${res.statusCode}
⏱️  Duration    : ${duration}

📥 Params:
${JSON.stringify(req.params?.length > 0 ? req.params : 'No Params Sent', null, 2)}

📤 Query:
${JSON.stringify(req.query?.length > 0 ? req.query : 'No Query Sent', null, 2)}

📨 Body:
${JSON.stringify(req.body ? req.body : 'no Body Sent', null, 2)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
    })

    next();
};