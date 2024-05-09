export default function UsersPage() {
  return (
    <div className="min-h-[800px]">
      <div className="container">
        <select name="" id="" className="border rounded">
          <option value="new">Newest</option>
          <option value="t">Top rewords</option>
          <option value="v">Verified</option>
        </select>

        {/* All user */}
        <div>
          {Array.from({ length: 5 }).map((_, index) => (
            <p key={index}>User {index}</p>
          ))}
        </div>
      </div>
      <hr className="my-20" />
    </div>
  );
}
