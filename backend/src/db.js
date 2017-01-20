import service from "feathers-memory";

export default service({
  paginate: {
    default: 10,
    max: 100
  }
})