const side_triangle = document.getElementById(`side-triangle`);
const side_square = document.getElementById(`side-square`)
const base_rectangle = document.getElementById(`base-rectangle`)
const height_rectangle = document.getElementById(`height-rectangle`)
const radius = document.getElementById(`radius`)

const triangleResult = document.getElementById(`triangle`);
const squereResult = document.getElementById(`square`)
const rectangleResult = document.getElementById(`rectangle`)
const circleResult = document.getElementById(`circle`)

let selectOP

const checkSelect = (check) => {
    
    selectOP = check.value;

    console.log('%c⧭', 'color: #eeff00', check.value);

    return;

}

const calculateTriangle = () => {

    if( selectOP == 1)  {

        const result = side_triangle.value * 3;

        if(isNaN(result)) {

            triangleResult.innerHTML = `<b style="color:red;">Solo permite numeros.</b>`

            return;

        } else if(result) {

            triangleResult.innerHTML = `<b style="color:blue;">${result}</b>`

            if(side_triangle.value != ""){
                side_triangle.value = ""
            }
            
            return;

        } else if (selectOP == 1 && !result) {

            triangleResult.innerHTML = `<b style="color:red;">Introduce un numero.</b>`

            return;
        }

    } else if( selectOP == 2){

        const result = 1.73 / 4 * side_triangle.value * side_triangle.value;

        if(isNaN(result)) {

            triangleResult.innerHTML = `<b style="color:red;">Solo permite numeros.</b>`

            return;

        } else if(result) {

            triangleResult.innerHTML = `<b style="color:blue;">${result}m²</b>`

            if(side_triangle.value != ""){
                side_triangle.value = ""
            }

            return;

        } else if (selectOP == 2 && !result) {

            triangleResult.innerHTML = `<b style="color:red;">Introduce un numero.</b>`

            return;
        }
        
    } else {

        triangleResult.innerHTML = `<b style="color:red;">Seleccióne la operación</b>`
    
        return;
    }


       
}

const calculateSquare = () => {

    if(selectOP == 1) {

        const result = side_square.value * 4;

        if(isNaN(result)) {

            squereResult.innerHTML = `<b style="color:red;">Solo permite numeros.</b>`

            return;

        } else if(result) {

            squereResult.innerHTML = `<b style="color:blue;">${result}</b>`

            if(side_square.value != ""){
                side_square.value = ""
            }
            
            return;

        } else if (selectOP == 1 && !result) {

            squereResult.innerHTML = `<b style="color:red;">Introduce un numero.</b>`

            return;
        }
    } else if( selectOP == 2){

        const result = side_square.value * side_square.value;

        if(isNaN(result)) {

            squereResult.innerHTML = `<b style="color:red;">Solo permite numeros.</b>`

            return;

        } else if(result) {

            squereResult.innerHTML = `<b style="color:blue;">${result}m²</b>`

            if(side_square.value != ""){
                side_square.value = ""
            }

            return;

        } else if (selectOP == 2 && !result) {

            squereResult.innerHTML = `<b style="color:red;">Introduce un numero.</b>`

            return;
        }
        
    } else {

        squereResult.innerHTML = `<b style="color:red;">Seleccióne la operación</b>`
    
        return;
    }



}

const calculateRectangle = () => {

    if(selectOP == 1) {

        const base = base_rectangle.value * 2;
        const height = height_rectangle.value * 2;

        if(!base) {

            rectangleResult.innerHTML = `<b style="color:red;">Debe colocar la base.</b>`
    
            return;

        } else if(!height) {

            rectangleResult.innerHTML = `<b style="color:red;">Debe colocar la altura.</b>`
    
            return;

        } else {

            const result = base + height;

            if(isNaN(result)) {

                rectangleResult.innerHTML = `<b style="color:red;">Solo permite numeros.</b>`
    
                return;
    
            } else if(result) {
    
                rectangleResult.innerHTML = `<b style="color:blue;">${result}</b>`
    
                if(base_rectangle.value != "" && height_rectangle != ""){
                    base_rectangle.value = "";
                    height_rectangle.value = "";
                }
                
                return;
    
            } else if (selectOP == 1 && !result) {
    
                rectangleResult.innerHTML = `<b style="color:red;">Introduce un numero.</b>`
    
                return;
    
            }
        }       

    } else if( selectOP == 2){

        if(!base_rectangle.value) {

            rectangleResult.innerHTML = `<b style="color:red;">Debe colocar la base.</b>`
    
            return;

        } else if(!height_rectangle.value) {

            rectangleResult.innerHTML = `<b style="color:red;">Debe colocar la altura.</b>`
    
            return;

        } else {

            const result = base_rectangle.value * height_rectangle.value;

            if(isNaN(result)) {

                rectangleResult.innerHTML = `<b style="color:red;">Solo permite numeros.</b>`
    
                return;
    
            } else if(result) {
    
                rectangleResult.innerHTML = `<b style="color:blue;">${result}m²</b>`
    
                if(base_rectangle.value != "" && height_rectangle != ""){
                    base_rectangle.value = "";
                    height_rectangle.value = "";
                }
    
                return;
    
            } else if (selectOP == 2 && !result) {
    
                rectangleResult.innerHTML = `<b style="color:red;">Introduce un numero.</b>`
    
                return;
            }
            
        }

    } else {

        rectangleResult.innerHTML = `<b style="color:red;">Seleccióne la operación</b>`
    
        return;
    }



}

const calculateCircle = () => {

    if( selectOP == 1 )  {

        const result = radius.value * 3.14;

        if(isNaN(result)) {

            circleResult.innerHTML = `<b style="color:red;">Solo permite numeros.</b>`

            return;

        } else if(result) {

            circleResult.innerHTML = `<b style="color:blue;">${result}</b>`

            if(radius.value != ""){
                radius.value = ""
            }
            
            return;

        } else if (selectOP == 1 && !result) {

            circleResult.innerHTML = `<b style="color:red;">Introduce un numero.</b>`

            return;
        }

    } else if( selectOP == 2 ){

        const radiusValue = radius.value / 2;

        const radiusResult = radiusValue * radiusValue;

        const result = radiusResult * 3.14;

        if(isNaN(result)) {

            circleResult.innerHTML = `<b style="color:red;">Solo permite numeros.</b>`

            return;

        } else if(result) {

            circleResult.innerHTML = `<b style="color:blue;">${result} cm</b>`

            if(radius.value != ""){
                radius.value = ""
            }

            return;

        } else if (selectOP == 2 && !result) {

            circleResult.innerHTML = `<b style="color:red;">Introduce un numero.</b>`

            return;
        }
        
    } else {

        circleResult.innerHTML = `<b style="color:red;">Seleccióne la operación</b>`
    
        return;
    }



}