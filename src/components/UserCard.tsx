import { User } from "../types";

type UserCardProps = {
  user: User;
};

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div
      className="shadow-md rounded-md sm:grow md:w-fit max-w-80 grow"
      key={user?.ID}
    >
      <div className="flex flex-col items-center justify-center p-4 border-b border-gray-200">
        <img
          className="rounded-full w-24 h-24"
          src="/userAvatar.png"
          alt="profile"
        />
        <p className="text-xl font-semibold text-violet-800">
          {user?.FirstNameLastName}
        </p>
        <p className="text-sm font-medium text-violet-900">{user?.JobTitle}</p>
      </div>
      <div className="p-4">
        <p className=" text-sm">
          <span className="text-md font-medium text-violet-800">Company:</span>{" "}
          {user?.Company}
        </p>
        <p className=" text-sm">
          <span className="text-md font-medium  text-violet-800">Mobile No.:</span>{" "}
          {user?.Phone}
        </p>
        <p className=" text-sm">
          <span className="text-md font-medium text-violet-800">Email: </span>
          {user?.Email}
        </p>
      </div>
    </div>
  );
};
