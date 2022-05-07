module.exports = async (freelancers, employers, id) => {
    let user = await freelancers.findOne({
        id
    });
    if(user) {
        return freelancers;
    } else {
        return employers
    }
}