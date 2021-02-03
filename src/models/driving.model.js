'use strict';
var dbConn = require('../../config/db.config');
//Setting object create
var Driving = function (driving) {
    this.classOfEquipment = driving.classOfEquipment
    this.drivingExperience = driving.drivingExperience
    this.dump = driving.dump
    this.flat = driving.flat
    this.fromDate = driving.fromDate
    this.miles = driving.miles
    this.reefer = driving.reefer
    this.tank = driving.tank
    this.toDate = driving.toDate
    this.user_id = driving.user_id
    this.van = driving.van

    this.Newfoundland_and_Labrador = driving.Newfoundland_and_Labrador=== true ? true : false
    this.Aguascalientes = driving.Aguascalientes=== true ? true : false
    this.Alabama = driving.Alabama=== true ? true : false
    this.Alaska = driving.Alaska=== true ? true : false
    this.Alberta = driving.Alberta=== true ? true : false
    this.Arizona = driving.Arizona=== true ? true : false
    this.Baja_California = driving.Baja_California=== true ? true : false
    this.Baja_California_Sur = driving.Baja_California_Sur=== true ? true : false
    this.British_Columbia = driving.British_Columbia=== true ? true : false
    this.California = driving.California=== true ? true : false
    this.Campeche = driving.Campeche=== true ? true : false
    this.Chiapas = driving.Chiapas=== true ? true : false
    this.Chihuahua = driving.Chihuahua=== true ? true : false
    this.Ciudad_de_México = driving.Ciudad_de_México=== true ? true : false
    this.Coahuila_de_Zaragoza = driving.Coahuila_de_Zaragoza=== true ? true : false
    this.Colima = driving.Colima=== true ? true : false
    this.Colorado = driving.Colorado=== true ? true : false
    this.Connecticut = driving.Connecticut=== true ? true : false
    this.Delaware = driving.Delaware=== true ? true : false
    this.Durango = driving.Durango=== true ? true : false
    this.Florida = driving.Florida=== true ? true : false
    this.Georgia = driving.Georgia=== true ? true : false
    this.Guanajuato = driving.Guanajuato=== true ? true : false
    this.Guerrero = driving.Guerrero=== true ? true : false
    this.Hawaii = driving.Hawaii=== true ? true : false
    this.Hidalgo = driving.Hidalgo=== true ? true : false
    this.Idaho = driving.Idaho=== true ? true : false
    this.Illinois = driving.Illinois=== true ? true : false
    this.Indiana = driving.Indiana=== true ? true : false
    this.Iowa = driving.Iowa=== true ? true : false
    this.Jalisco = driving.Jalisco=== true ? true : false
    this.Kansas = driving.Kansas=== true ? true : false
    this.Kentucky = driving.Kentucky=== true ? true : false
    this.Louisiana = driving.Louisiana=== true ? true : false
    this.Maine = driving.Maine=== true ? true : false
    this.Manitoba = driving.Manitoba=== true ? true : false
    this.Maryland = driving.Maryland=== true ? true : false
    this.Massachusetts = driving.Massachusetts=== true ? true : false
    this.Michigan = driving.Michigan=== true ? true : false
    this.Michoacan_de_Ocampo = driving.Michoacán_de_Ocampo=== true ? true : false
    this.Minnesota = driving.Minnesota=== true ? true : false
    this.Mississippi = driving.Mississippi=== true ? true : false
    this.Missouri = driving.Missouri=== true ? true : false
    this.Montana = driving.Montana=== true ? true : false
    this.Morelos = driving.Morelos=== true ? true : false
    this.Mexico = driving.México=== true ? true : false
    this.Nayarit = driving.Nayarit=== true ? true : false
    this.Nebraska = driving.Nebraska=== true ? true : false
    this.Nevada = driving.Nevada=== true ? true : false
    this.New_Jersey = driving.New_Jersey=== true ? true : false
    this.New_Brunswick = driving.New_Brunswick=== true ? true : false
    this.New_Hampshire = driving.New_Hampshire=== true ? true : false
    this.New_Mexico = driving.New_Mexico=== true ? true : false
    this.New_York = driving.New_York=== true ? true : false
    this.North_Carolina = driving.North_Carolina=== true ? true : false
    this.North_Dakota = driving.North_Dakota=== true ? true : false
    this.Nova_Scotia = driving.Nova_Scotia=== true ? true : false
    this.Nuevo_Leon = driving.Nuevo_León=== true ? true : false
    this.Oaxaca = driving.Oaxaca=== true ? true : false
    this.Ohio = driving.Ohio=== true ? true : false
    this.Oklahoma = driving.Oklahoma=== true ? true : false
    this.Ontario = driving.Ontario=== true ? true : false
    this.Oregon = driving.Oregon=== true ? true : false
    this.Pennsylvania = driving.Pennsylvania=== true ? true : false
    this.Prince_Edward_Island = driving.Prince_Edward_Island=== true ? true : false
    this.Puebla = driving.Puebla=== true ? true : false
    this.Quebec = driving.Quebec=== true ? true : false
    this.Queretaro_de_Arteaga = driving.Queretaro_de_Arteaga=== true ? true : false
    this.Quintana_Roo = driving.Quintana_Roo=== true ? true : false
    this.Rhode_Island = driving.Rhode_Island=== true ? true : false
    this.San_Luis_Potosí = driving.San_Luis_Potosí=== true ? true : false
    this.Saskatchewan = driving.Saskatchewan=== true ? true : false
    this.Sinaloa = driving.Sinaloa=== true ? true : false
    this.Sonora = driving.Sonora=== true ? true : false
    this.South_Carolina = driving.South_Carolina=== true ? true : false
    this.South_Dakota = driving.South_Dakota=== true ? true : false
    this.Tabasco = driving.Tabasco=== true ? true : false
    this.Tamaulipas = driving.Tamaulipas=== true ? true : false
    this.Tennessee = driving.Tennessee=== true ? true : false
    this.Texas = driving.Texas=== true ? true : false
    this.Tlaxcala = driving.Tlaxcala=== true ? true : false
    this.Utah = driving.Utah=== true ? true : false
    this.Veracruz_de_Ignacio_de_la_Llave = driving.Veracruz_de_Ignacio_de_la_Llave=== true ? true : false
    this.Vermont = driving.Vermont=== true ? true : false
    this.Virginia = driving.Virginia=== true ? true : false
    this.Washington = driving.Washington=== true ? true : false
    this.West_Virginia = driving.West_Virginia=== true ? true : false
    this.Wisconsin = driving.Wisconsin=== true ? true : false
    this.Wyoming = driving.Wyoming=== true ? true : false
    this.Yucatan = driving.Yucatan=== true ? true : false
    this.Zacatecas = driving.Zacatecas === true ? true : false
};

Driving.create = function (newEmp, result) {

    if (newEmp.dump !== true) {
        newEmp.dump = false
    }

    if (newEmp.flat !== true) {
        newEmp.flat = false
    }

    if (newEmp.van !== true) {
        newEmp.van = false
    }

    if (newEmp.reefer !== true) {
        newEmp.reefer = false
    }

    if (newEmp.tank !== true) {
        newEmp.tank = false
    }
    dbConn.query("INSERT INTO driving_experience set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(false, null);
        }
        else {
            result(true, res.insertId);
        }
    });
};



module.exports = Driving;



