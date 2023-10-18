import Layout from "components/Layout";
import { useState } from "react";


const DEFAULT_DATA ={
  title: "",
  description: "",
  link: "",
  priority: "1",
  timeToFinish : "60" 
}

const ResourceCreate = () => {
  const[form,setForm]=useState(DEFAULT_DATA);

  const submitForm =()=>{
    alert(JSON.stringify(form));
  }
  const handlechange = (e) =>{
    const { name,value }=e.target;
    setForm({
      ...form,
      [name] :value
    })
  }
  const resetForm=()=> setForm(DEFAULT_DATA);
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                  <input 
                  onChange={handlechange}
                  value={form.title} 
                  name ="title"
                  className="input" 
                  type="text" 
                  placeholder="resource manager project using next js" />
                  
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea value ={form.description} 
                     onChange={handlechange}
                     name="description"
                    className="textarea" placeholder="important for placement pov"></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input value ={form.link}
                    onChange={handlechange}
                    name="link"
                    className="input" type="text" placeholder="https://resourcemanager.com" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select value ={form.priority}
                      onChange={handlechange}
                      name="priority"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input value ={form.timeToFinish}
                    onChange={handlechange}
                    name ="timeToFinish"
                    className="input" type="number" placeholder="" />
                  </div>
                  <p class="help">Time is in minutes</p>
                </div>
                <div className="field is-grouped">
                <div className="control">
                  <button 
                  onClick={submitForm}
                  type ="button"
                  className="button is-link">Submit</button>
                </div>
                <div className="control">
                   <button 
                   onClick={resetForm}
                   type="button"
                   className="button is-link is-light">Reset Form</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
//cfbr