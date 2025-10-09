import Modal from "@/Components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
  const response = await data.json()

  return (
    <Modal>
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
          <img
            src={response.avatar}
            alt={response.name}
            className="w-full h-48 object-cover"
          // onError={(e) => {
          //     (e.target as HTMLImageElement).src =
          //         "https://via.placeholder.com/150?text=No+Image";
          // }}
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 truncate">
              {response.name}
            </h2>
            <p className="text-sm text-gray-600">{response.email}</p>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">User ID: {id}</h2>
      </div>
    </Modal>
  );
}
