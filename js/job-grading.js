
function get_function_groups(){
    let groups = {};

    Object.keys(mockdata.functions).forEach(key => {
        let job = mockdata.functions[key];
        let family = [];
        if (!(job.functionFamily in groups)){
            groups[job.functionFamily] = family;
        } else {
            family = groups[job.functionFamily];
        }
        if (!job.expectations){
            job.expectations = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante risus, sollicitudin eget lobortis ac, venenatis et tellus. Nullam et turpis non odio aliquet aliquet. Proin non vestibulum nisl.";
        }
        family.push(Object.assign({},job,{key:key}));
    });
    return groups;
}