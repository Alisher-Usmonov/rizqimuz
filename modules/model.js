module.exports = (role, FreelancerModel, EmployerModel) => {
    if(role == "freelancer") {
        return FreelancerModel;
    }
    return EmployerModel
}