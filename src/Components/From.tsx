import React from "react";

function From() {
  return (
    <div>
      <form>
        <input type="text" name="nick" placeholder="nick" />
        <input type="text" name="avatar" placeholder="avatar" />
        <input type="text" name="subMonths" placeholder="subMonths" />
        <input type="text" name="description" placeholder="description" />
        <button type="submit">Save new Subs</button>
      </form>
    </div>
  );
}

export default From;
