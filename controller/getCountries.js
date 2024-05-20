const paises = require("../paises");
const {request, response} =require("express")

const getCountries =(req,res)=>{

    let paisesData = paises.paises;

    return res.json({
        ok:true,
        paisesData,
        statusCode:200
    });
}

const getCountryById=(req = request, res=response)=>{
    let id = parseInt(req.params.id);
    let paisesData = paises.paises;
    let paisSearch = paisesData.find((paises)=>{
        return paises.id === id;
    })

    if(paisSearch){

      return res.json({
        ok:true,
        paisSearch,
        statusCode: 200
      })
    }else{
        return res.json({
            ok:false,
            msg:"no hay un pais con ese id",
            statusCode:404
        })
    }
}

module.exports ={
    getCountries,
    getCountryById
}