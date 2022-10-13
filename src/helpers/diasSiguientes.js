

export const day = (dNumber) =>{
    switch(dNumber){
        case 0: return "Domingo";
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miercoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sabado";
    }
}

export const nextDay = (f) => {
    const fecha = new Date();
    const k = 24 * 60 * 60 * 1000
    const dMañana = (new Date(fecha.getTime() + k*f)).getDay();
    return dMañana;
}


export const diasSiguientes = () => {
    
    const ds = [nextDay(1),nextDay(2),nextDay(3),nextDay(4),nextDay(5)];
    const dsc = [];
    ds.forEach( d => {
        dsc.push(day(d))
    })
    return dsc;
}