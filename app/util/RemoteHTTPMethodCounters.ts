class RequestMethodCounter {
    private _globalCtr: number;
    private _getCtr: number;
    private _postCtr: number;
    private _putCtr: number;
    private _delCtr: number;
    private _queryStringCtr: number;
    private _otherCtr: number;
    
    constructor() {
        this._globalCtr = 0;
        this._getCtr = 0;
        this._postCtr = 0;
        this._putCtr = 0;
        this._delCtr = 0;
        this._queryStringCtr = 0;
        this._otherCtr =0;
    }

    get globalCtr(): number {
        return this._globalCtr
    }

    get getCtr(): number {
        return this._getCtr;
    };
    set getCtr(ctr: number) {
        this._getCtr += 1;
        this._globalCtr += 1;
    };

    get postCtr(): number {
        return this._postCtr;
    };
    set postCtr(ctr: number) {
        this._postCtr += 1;
        this._globalCtr += 1;
    };

    get putCtr(): number {
        return this._putCtr;
    };
    set putCtr(ctr: number) {
        this._putCtr += 1;
        this._globalCtr += 1;
    };

    get delCtr(): number {
        return this._delCtr;
    };
    set delCtr(ctr: number) {
        this._delCtr += 1;
        this._globalCtr += 1;
    };

    get otherCtr(): number {
        return this._otherCtr;        
    };
    set otherCtr(ctr: number) {
        this._otherCtr += 1;
        this._globalCtr += 1;
     };

    get queryStringCtr(): number {
        return this._queryStringCtr;
    };
    set queryStringCtr(ctr: number) {
        this._queryStringCtr += 1;
        this._globalCtr += 1;
    };

    printRMCounters(): string {
        let _printString: string = "";
        
        _printString = "Request Methods Counts\n\tTotal ==> " + this._globalCtr +
            "\n\tGETs ==> " + this._getCtr +
            "\n\tPOSTs ==>" + this._postCtr +            
            "\n\tPUTs ==>" + this._putCtr +
            "\n\tDELs ==>" + this._delCtr +
            "\n\tOthers ==>" + this._otherCtr +
            "\n\tQuery Strings ==>" + this._queryStringCtr;

        return(_printString);            

    }

}

export {RequestMethodCounter};