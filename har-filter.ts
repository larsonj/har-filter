
import * as jsonFile from './mail.google.com.har';

console.log("\n Start \n");

let har: any=jsonFile;
let entriesCount: number=har.log.entries.length;

console.log("harfile entries: \n"+ entriesCount);

har.log.entries.forEach(element => {

    console.log("REQUESTS");
    console.log("request.method: " + element.request.method);

    console.log("REQUEST QUERY STRINGS");
    element.request.queryString.forEach(qs => {
        console.log("queryString.url: " + qs.url);
    });
    
    console.log("REQUEST HEADERS");
    element.request.headers.forEach(hdr => {
        console.log(hdr.name + '==>' + hdr.value);

    });
    console.log("RESPONSE HEADERS");
    console.log("response.content.mimeType: " + element.response.content.mimeType);
    element.response.headers.forEach(header => {
        if (header.name=="response content-type") {
            console.log(header.name + '->' + header.value);
        }
    });

}); 

console.log("\n EXIT \n");

