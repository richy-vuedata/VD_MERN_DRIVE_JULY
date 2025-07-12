exports.createData = async(req, res)=>{
    try {
        const data = req.body;
        res.status(200).send({
            message: "data",
            data: data
        })
    } catch(err){
        res.status(500).send({
            message: "internal server error"
        })
    }
}