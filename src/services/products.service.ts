import type { AddSingleProductDTO, IAddSingleProductResponse } from "@/ts/dtos/AddSingleProductDTO";
import type { IProduct } from "@/ts/interfaces/IProduct";
import type { IResponse } from "@/ts/interfaces/IResponse";

import httpClient from "@/utils/httpClient"

const httpGetProducts = (): Promise<IResponse<IProduct[]>> => { 
    return httpClient.get("/phones");
};

const httpGetSingleProduct = (id: number): Promise<IResponse<IProduct>> => { 
    return httpClient.get(`/phones/${id}`);
};

const httpAddSingleProduct = (dto: AddSingleProductDTO): Promise<IResponse<IAddSingleProductResponse>> => { 
    return httpClient.post("/phones", dto);
};

const httpUpdateSingleProduct = (id: number, dto: IProduct): Promise<IResponse<IProduct>> => {
    return httpClient.patch(`/phones/${id}`, dto);
};

const httpDeleteSingleProduct = (id: number): Promise<IResponse<void>> => {
    return httpClient.delete(`/phones/${id}`);
};

export { httpGetProducts, httpGetSingleProduct, httpAddSingleProduct, httpUpdateSingleProduct, httpDeleteSingleProduct };