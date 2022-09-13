import { ref, watch } from "vue";

// jeżeli nie damy val = null to wartość będzie undefine jak nie będzie podana w funkcji
export function useStorage(key, val = null) {
    let storderVal = read();
    // let val = ref(storderVal);

    if(storderVal) {
        val = ref(storderVal);
    }
    else {
        val = ref(val);

        write();
    }

    // deep: true, zmienia wartość na settimeout?
    watch(val, write, { deep: true });

    function read() {
        return JSON.parse(localStorage.getItem(key));
    }
    
    function write() {
        if(val.value === null || val.value === ''){
            localStorage.removeItem(key);
        }
        else {
            localStorage.setItem(key,JSON.stringify(val.value));
        }
    }

    return val;
}