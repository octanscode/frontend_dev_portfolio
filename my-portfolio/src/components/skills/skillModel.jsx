const SkillModel = ({ name, value }) => {
  return (
    <div>
      <span className="text-xl">{name}</span>
      <div title={`${value}%`} className="h-[10px] w-full bg-gray-400 mt-4">
        <div
          style={{ width: `${value}%` }}
          className={`h-[10px] bg-gray-700`}
        />
      </div>
    </div>
  );
};

export default SkillModel;
