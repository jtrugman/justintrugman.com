const ItemsDivider = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            {/* Section 1 */}
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                Content 1
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            {/* Section 2 */}
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                Content 2
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            {/* Section 3 */}
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                Content 3
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            {/* Section 4 */}
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                Content 4
            </div>
        </div>
    );
  };
  
  export default ItemsDivider;