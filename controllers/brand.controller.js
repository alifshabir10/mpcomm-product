import { Router } from 'express';
import { Sequelize, Op } from '../models/index';


// select Brand
const allBrand = async (req, res) => {
    const brand = await req.context.models.brand.findAll(
        // {
        //     include: [{
        //         model: req.context.models.add
        //     }]
        // }
    )
    return res.send(brand);
}

const findBrandMethod = async (req, res) => {
    const brand = await req.context.models.brand.findByPk(
        req.params.brandId,
    );
    return res.send(brand);
};

const addBrandMethod = async (req, res) => {
    const { brand_name } = req.body;

    const brand = await req.context.models.brand.create({

        brand_name: brand_name
    });
    return res.send(brand);

};

export default {
    allBrand,
    findBrandMethod,
    addBrandMethod
}