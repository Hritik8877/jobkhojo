import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanybyId from "@/hooks/useGetCompanybyId";

const CompanyUpdate = () => {
  const params = useParams();
  const load = useGetCompanybyId(params.id);
  
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);
    
  const [input, setinput] = useState({
    name: "",
    description: "",
    location: "",
    website: "",
    file: null,
  });

  useGetCompanybyId(params.id)
  const {singleCompany}=useSelector(store=>store.company)
  const chageeventhandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const chagefilehandler = (e) => {
    const file = e.target.files?.[0];
    setinput({ ...input, file });
  };

  const submithandler = async (e) => {
    setloading(true);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", input.name);
    formdata.append("description", input.description);
    formdata.append("location", input.location);
    formdata.append("website", input.website);
    if (input.file) {
      formdata.append("file", input.file);
    }

    try {
      setloading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }finally{
        setloading(false)
    }
  };

  useEffect(() => {
  if (singleCompany && Object.keys(singleCompany).length > 0) {
    setinput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      location: singleCompany.location || "",
      website: singleCompany.website || "",
      file: null,
    });
  }
}, [singleCompany]);
  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submithandler}>
          <div className="flex items-center gap-5 p-8">
            <Button onClick={()=>navigate("/admin/companies")}
              variant="outline"
              className="flex items-center gap-2 text-gray-500 font-semibold"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Company Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={chageeventhandler}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={chageeventhandler}
              />
            </div>
            <div>
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                onChange={chageeventhandler}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={chageeventhandler}
              />
            </div>
            <div>
              <Label>Logo</Label>
              <Input type="file" accept="image/*" onChange={chagefilehandler} />
            </div>
          </div>
         

          {
              loading ? <Button className="w-full my-4 "> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>: <Button type="submit" className="w-full mt-8">
            Update
          </Button>
             }
        </form>
      </div>
    </div>
  );
};

export default CompanyUpdate;
