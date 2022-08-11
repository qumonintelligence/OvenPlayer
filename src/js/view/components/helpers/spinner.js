/**
 * Created by hoho on 2018. 7. 25..
 */
import OvenTemplate from 'view/engine/OvenTemplate';


let spinnerTimeout = 0

const Spinner = function($container, api){
    let $spinner = "";

    const onRendered = function($current, template){
        $spinner = $current;
    };
    const onDestroyed = function(){
        //Do nothing.
    };
    const events = {};

    return Object.assign(OvenTemplate($container, "Spinner", api.getConfig(), null, events, onRendered, onDestroyed ), {
        show: function (isShow, force= false) {
            if(isShow){
                clearTimeout(spinnerTimeout);
                if(force) {
                    $spinner.show();  
                } else {
                 
                    spinnerTimeout = setTimeout(()=>{ 
                        $spinner.show();
                    }, 5000)
                }
            
            }else{
                clearTimeout(spinnerTimeout);
                $spinner.hide();
            }
        }
    });
};


export default Spinner;