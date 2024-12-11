import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import Organization_card from "@/components/Organization_card";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const organizations = [{
    _createdAt: new Date,
    name: 'Голомт банк',
    views: 55,
    author: {_id: 1, Reputation: 'төслийн менежер'},
    _id: 1,
    description: "Монголын анхны банк санхүүгийн байгууллага",
    image:
      "https://th.bing.com/th/id/OIP.vuBn2pgLjrSGNsnjoIrdtAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7",
    category: "банк",
    title: "Create place to work!"

  }]
  return (
    <>
      <section className="gray_container">
        <div className="slate_container">
          <div>
            <h1 className="header"> 
              Манай байгууллага нь шинээр гарч ирж байгаа болон мэргэжлийн өндөр 
              түвшинд үйл ажиллагаа явуулж буй байгууллагуудыг танилцуулах зорилготой.
            </h1>
            <p className="sub-header">Манай баг хамт олон таны байгууллагыг сурталчилах болно</p>
            <div className="button">
              <button className="border border-white bg-blue-400 px-5 py-5 rounded-md">Бидэнтэй холбогдоорой</button>
            </div>
          </div>
          <Image src="/logo.png" alt="logo" width={500} height={500}/>
        </div>
        <div>
          <SearchForm query = {query}/>
        </div>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Хайлтын үр дүнд "${query}"` : 'Байгууллагууд'}
        </p>
        <ul className="mt-7 card_grid">
          {organizations?.length > 0 ? (
            organizations.map((organizations: org_type, index: number)=>(
              <Organization_card key={organizations?._id} organizations={organizations}/>
            ))
          ): (
            <p className="no-results">Байгууллага олдсонгүй</p>
          )
          }
        </ul>
      </section>
    </>
  );
}
