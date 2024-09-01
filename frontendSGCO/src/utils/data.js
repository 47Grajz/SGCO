const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "Nombre", uid: "name", sortable: true},
    {name: "TELEFONO", uid: "phone_number", sortable: true},
    {name: "EPS", uid: "eps", sortable: true},
    {name: "CIUDAD DE NACIMIENTO", uid: "birth_place"},
    {name: "DOCUMENTO", uid: "identification_card_number"},
    {name: "ESTADO", uid: "User.status", sortable: true},
    {name: "", uid: "actions"},
  ];
  
  const statusOptions = [
    {name: "Active", uid: "Active"},
    {name: "uncompleted", uid: "uncompleted"},
    {name: "Vacation", uid: "vacation"},
  ];
  
  
    const genderOptions = [
    {label: "Masculino", value: "Male",},
    {label: "Femenino", value: "Female",},
    {label: "Otro", value: "Other",},
  ];
  
  const ciudadesCaldas = [
    "Aguadas",
    "Anserma",
    "Aranzazu",
    "Belalcázar",
    "Chinchiná",
    "Filadelfia",
    "La Dorada",
    "La Merced",
    "Manizales",
    "Manzanares",
    "Marmato",
    "Marquetalia",
    "Marulanda",
    "Neira",
    "Norcasia",
    "Pácora",
    "Palestina",
    "Pensilvania",
    "Riosucio",
    "Risaralda",
    "Salamina",
    "Samaná",
    "San José",
    "Supía",
    "Victoria",
    "Villamaría",
    "Viterbo"
  ];
  
  const conventions = [
    {id:1,label: "Diente Obturado", value: "",color:"#2E8ADA"},
    {id:2,label: "Destruidos por caries", value: "2",color:"#B83A3A"},
    {id:3,label: "Restauracion colocada 3", value: "3",color:"#639E21"},
    {id:4,label: "Dientes destruidos por trauma", value: "3",color:"#392D2D"},
  ];
  
  
  
  
  
  // const columns = [
  //   {name: "ID", uid: "id", sortable: true},
  //   {name: "Nombre", uid: "name", sortable: true},
  //   {name: "EDAD", uid: "age", sortable: true},
  //   {name: "ROL", uid: "role", sortable: true},
  //   {name: "EQUIPO", uid: "team"},
  //   {name: "EMAIL", uid: "email"},
  //   {name: "TIN", uid: "status", sortable: true},
  //   {name: "ACTIONS", uid: "actions"},
  // ];
  
  
  
  export {columns,statusOptions,genderOptions,ciudadesCaldas,conventions};