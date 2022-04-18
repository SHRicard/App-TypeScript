import { sub } from "../Components/types";

interface Props {
  subs: Array<sub>;
}
const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>
              {sub.nick}(<small>{sub.subMonths}</small>)
              <p>{sub.description?.substring(0, 100)}</p>
            </h4>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
