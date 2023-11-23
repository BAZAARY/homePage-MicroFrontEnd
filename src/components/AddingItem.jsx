import React from 'react';
import './AddingItem.css'
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function AddingItem() {
    const navigate = useNavigate();

    function clickOnDifferentStep(path){
        navigate(path);
        window.location.reload();
    }

    return (
        <>
            <div className="steps-navbar">
                <button type="button" onClick={() => {clickOnDifferentStep("/addingitem/category")}} id="button-category" className="button-category"   >
                    ❶ Categoria
                </button>
                <button type="button" id="button-bigger-than" className="button-bigger-than"   >
                    &#x3e;
                </button>
                <button type="button" onClick={() => {clickOnDifferentStep("/addingitem/description")}} id="button-description" className="button-description"   >
                    ❷ Descripcion
                </button>
                <button type="button" id="button-bigger-than" className="button-bigger-than"   >
                    &#x3e;
                </button>

                <button type="button" onClick={() => {clickOnDifferentStep("/addingitem/media")}} id="button-media" className="button-media"   >
                    ❸ Media
                </button>
                <button type="button" id="button-bigger-than" className="button-bigger-than"   >
                    &#x3e;
                </button>
                <button type="button" onClick={() => {clickOnDifferentStep("/addingitem/specs")}} id="button-specs" className="button-specs"   >
                    ❹ Especifiaciones
                </button>
                <button type="button" id="button-bigger-than" className="button-bigger-than"   >
                    &#x3e;
                </button>
                <button type="button" onClick={() => {clickOnDifferentStep("/addingitem/preview")}} id="button-preview" className="button-preview"   >
                    ❺ Preview
                </button>
            </div>
            <main className="App-content">{/**Se usa para renderizar los hijos: HomePage, etc*/}
                <Outlet />
            </main>
        </>
    );
}

export default AddingItem;
