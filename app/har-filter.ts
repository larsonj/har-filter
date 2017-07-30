
import * as jsonFile from '../input.har';
import * as rmc from './util/RemoteHTTPMethodCounters';

let rmCtr = new rmc.RequestMethodCounter();
let har: any=jsonFile;
let harEntriesCount: number=har.log.entries.length;


console.log("harfile entries: \n"+ harEntriesCount);

har.log.entries.forEach(element => {
    // console.log("=======================================================");
    // console.log("REQUESTS");
    // console.log("request.method: " + element.request.method);
    switch(element.request.method) {
        case "GET": {
            rmCtr.getCtr += 1;
            break;
        }
        case "POST": {
            rmCtr.postCtr += 1;
            break;
        }
        case "PUT": {
            rmCtr.putCtr += 1;
            break;
        }        
        case "DELETE": {
            rmCtr.delCtr += 1;
            break;
        }
        default : {
            rmCtr.otherCtr += 1;
            break;
        }
    }

    // console.log("REQUEST QUERY STRINGS");
    console.log("Request URL: " + element.request.url);
    element.request.queryString.forEach(qs => {
        rmCtr.queryStringCtr += 1;
        console.log("queryString.name: [" + qs.name + "] value: [" + qs.value + "]");
    });
    
    // console.log("REQUEST HEADERS");
    element.request.headers.forEach(hdr => {
        // console.log(hdr.name + '==>' + hdr.value);

    });
    // console.log("RESPONSE HEAD");
    // console.log("response.content.mimeType: " + element.response.content.mimeType);
    element.response.headers.forEach(header => {
        // console.log(JSON.stringify(header));
        // if (header.name=="response content-type") {
        //     console.log(header.name + '->' + header.value);
        // }
    });

}); 

console.log(rmCtr.printRMCounters());

