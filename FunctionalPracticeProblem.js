// Temperature conversion function:
{
    const CELCIUS=1;
    const FARHENHEIT=2;
    function convertToTemp(value,type){
        switch(type){
        case CELCIUS:
            if(value>100||value<0){
                console.log("Not allowed");
                return;
            }
            else
            {
                let far=32+(value*9/5);
                return far;
            }
            case FARHENHEIT:
                if(value>212||value<32){
                    console.log("Not allowed");
                    return;
                }
                else
                {
                    let cel=(value-32)*5/9;
                    return cel;
                }
                default:
                    return "Undefined type"
                
        }
        
    console.log(convert(42,CELCIUS));
    console.log(convert(100,FARHENHEIT));
    convert(213,FARHENHEIT);
    convert(134,CELCIUS);
    console.log(convert(100,5));
    }
    }
