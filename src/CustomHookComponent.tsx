import { useEffect, useState,useMemo} from "react";
export interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
  }
function useFetchData(url:string){
    data:Beverage[]| null;
    done:boolean;
}{
    const[data,dataSet]= useState<Beverage [] | null>(null);
    const[done, doneSet]= useState(false);

    useEffect(()=>{
        fetch(url)
        .then((resp) => resp.json)
        .then((d: Beverage[]) =>{
            dataSet(d);
            doneSet(true);
        });
    },[url]);

    return{
        data,
        done,
    };
}
function CustomHookComponent () {
    const { data } = useFetchData<Beverage[]>("/hv-taplist.json");
  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  );
    return <div></div>
    
    }

export default CustomHookComponent;