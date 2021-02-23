
const readStatus = async(req,res)=> {
    const status = await req.context.models.status.findAll(
        // {
        //     include: [{
        //         model: req.context.models.status
        //     }]
        //   }
    )
    return res.send(status);
}

// const findStatus = async (req, res) => {
//     const status = await req.context.models.status.findByPk(
//       req.params.statusId,{
//         include: [{
//             model: req.context.models.status
//         }]
//       }
//     );
//     return res.send(status);
// };

const addStatus = async (req, res) => {
    const {stat_desc, stat_module} = req.body;
    const status = await req.context.models.status.create({
      stat_desc: stat_desc,
      stat_module : stat_module,
    });
    return res.send(status);
};
const editStatus = async (req, res) => {
    const {stat_name, city_prov_id} = req.body;
    const city =  await req.context.models.city.update({    
        city_name: city_name,
        city_prov_id : city_prov_id
     }, {
        where: { city_id: req.params.cityId }
          });
        return res.sendStatus(200);
  };
export default {
    readStatus,
    addStatus
}