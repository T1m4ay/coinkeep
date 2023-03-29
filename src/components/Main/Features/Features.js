import fm from "./Features.module.css";
import storage from "../../Icons/component";
import build from "../../Icons/building.svg";

function Features({ income, setIncome }) {
  return (
    <div className={fm.body}>
      <div className={fm.income}>
        {income.map((income) => (
          <div className={fm.income}>
            <img src={build} />
            {income.title}
          </div>
        ))}
      </div>
      <div className={fm.accounts}>sssh</div>
      <div className={fm.expenses}>ssssh</div>
    </div>
  );
}

export default Features;
