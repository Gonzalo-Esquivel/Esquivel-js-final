(async () => {
    const {value: cabaña} = await Swal.fire({
        title:'Bienvenido a La Morada',
        text:'Selecciona tu cabaña',
        confirmButtonText: 'Seleccionar',
        padding: '1rem',
        backdrop: true,
        position:'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
    
        input:'select',
        inputPlaceholder:'Cabaña',
        inputValue:'',
        inputOptions:{
            cabañaUno:'Cabaña Simple',
            cabañaDos:'Cabaña Luna de miel',
            cabañaTres:'Cabaña Familiar',
            cabañaCuatro:'Cabaña Amigos',
        }
        
    });
    if (cabaña){
        Swal.fire ({
            title: `Disfrute su estancia`
        })
    }
}) ()



