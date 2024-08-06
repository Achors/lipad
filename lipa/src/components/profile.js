
export default function Profile(){
    return (
           
        <div className="bg-white p-6 shadow-md flex items-center justify-between">
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <p className="text-lg">Name: John Doe</p>
            <p className="text-lg">Email: john@example.com</p>
        </section>
        <h2 className="text-xl font-bold">Payments</h2>
        <div>
          <p>Monday, 15 Jan 2022</p>
          <p>15:42:07 GMT +5</p>
        </div>
        <div>
          <span>Aldof Nyerere</span>
        </div>
      </div>

    )
};