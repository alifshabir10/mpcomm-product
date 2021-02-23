const findProduct = async (req, res) => {
    const product = await req.context.models.product.findByPk(req.params.prod_id);
    return res.send(product);
  };

const readProduct = async(req,res)=> {
    const product = await req.context.models.product.findAll(
        // {
        //     include: [{
        //         model: req.context.models.status
        //     }]
        //   }
    )
    return res.send(product);
}

const addProduct = async(req,res) => {
    const {
        prod_id,
	    prod_name,
	    prod_desc,
	    prod_price,
	    prod_stock,
	    prod_expire,
	    prod_weight,
	    prod_cate_id,
	    prod_brand_id,
	    prod_acco_id,
	    prod_stat_name,
	    prod_cond_name,
    }= req.body;
    const product = await req.context.models.product.create({
        prod_id: prod_id,
	    prod_name: prod_name,
	    prod_desc: prod_desc,
	    prod_price: prod_price,
	    prod_stock: prod_stock,
	    prod_expire: prod_expire,
	    prod_weight: prod_weight,
	    prod_cate_id: prod_cate_id,
	    prod_brand_id: prod_brand_id,
	    prod_acco_id: prod_acco_id,
	    prod_stat_name: prod_stat_name,
	    prod_cond_name: prod_cond_name,
    })
    return res.send(product)
}

const editProduct = async(req,res) => {
    const {
	    prod_name,
	    prod_desc,
	    prod_price,
	    prod_stock,
	    prod_expire,
	    prod_weight,
	    prod_cate_id,
	    prod_brand_id,
	    prod_acco_id,
	    prod_stat_name,
	    prod_cond_name,
    }= req.body;
    const product = await req.context.models.product.update({
	    prod_name: prod_name,
	    prod_desc: prod_desc,
	    prod_price: prod_price,
	    prod_stock: prod_stock,
	    prod_expire: prod_expire,
	    prod_weight: prod_weight,
	    prod_cate_id: prod_cate_id,
	    prod_brand_id: prod_brand_id,
	    prod_acco_id: prod_acco_id,
	    prod_stat_name: prod_stat_name,
	    prod_cond_name: prod_cond_name,
    }, {
        where: {prod_id: req.params.prod_id}}
    
    )
    return res.sendStatus(200)
}

const deleteProduct = async (req, res) => {
    const result = await req.context.models.product.destroy({
      where: { prod_id: req.params.prod_id },
    });
  
    return res.send(true);
  };

export default {
    findProduct,
    readProduct,
    addProduct,
    editProduct,
    deleteProduct
}