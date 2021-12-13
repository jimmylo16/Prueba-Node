const {response,request} = require('express');
const Busqueda = require('../models/busqueda');
const controller= new Busqueda();

const usuariosGet=(req=request, res=response) => {
    controller.readData();
    res.json({
        data: controller.data,
        msg: 'get-controller',
    });
}

const usuariosPost=(req, res=response) => {
    const body=req.body;
    // const usuario = new Usuario(body);
    res.json({
        msg: 'post-controller',
        // usuario
    });
}
const usuariosPut=(req, res=response) => {
    const {id}=req.params;
    res.json({
        msg: 'Put-controller',
        idselec: id
    });
}
const usuariosPatch=(req, res=response) => {
    res.json({
        msg: 'Patch-controller',
    });
}
const usuariosDelete=(req, res=response) => {
    const {id}=req.params;
    res.json({
        msg: 'Delete-controller',
        idselec: id
    });
}
module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosPut,
    usuariosDelete
}