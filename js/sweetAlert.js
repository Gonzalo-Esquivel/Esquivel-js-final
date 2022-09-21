(async () => {
    const {value: cabaña} = await Swal.fire({
        title:'Bienvenido a La Morada',
        text:'Te gustaria visitarnos en ...',
        confirmButtonText: 'Seleccionar',
        padding: '1rem',
        backdrop: true,
        position:'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
    
        input:'select',
        inputPlaceholder:'',
        inputValue:'',
        inputOptions:{
            climaUno:'Verano',
            climaDos:'Otoño',
            climaTres:'Invierno',
            climaCuatro:'Primavera',
            
        }
        
    });
    if (cabaña){
        Swal.fire ({
            title: `Consulta las fechas disponibles`,
            text:  `Te esperamos`,
        })
    }
}) ()



