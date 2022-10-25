import ApiManager from "./ApiManager";
import { StringServiceResponse, UsuarioLoginDto } from "./interfaces";

export const user_login = async (
  data: UsuarioLoginDto
): Promise<StringServiceResponse> => {
  try {
    const result = await ApiManager("/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain",
      },
      data: data,
    });
    return result;
  } catch (error: any) {
    return error.message;
  }
};
