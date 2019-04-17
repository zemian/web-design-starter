let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// This only works if target is non-EMACScript (for AMD or CommonJS)
// TO Enable this, we can add compilerOptions with {"module": "AMD"}
// export = ZipCodeValidator;

// For EMACSCript we can use "default"
export default ZipCodeValidator;
