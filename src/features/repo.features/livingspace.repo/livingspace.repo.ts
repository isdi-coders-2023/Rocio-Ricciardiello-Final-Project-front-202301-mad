import { currentUrl } from "../../../config.renderorlocal";
import { LivingSpaceStructure } from "../../../models/livingspace";
import { ServerResponse } from "../../../models/users";
import { RepoLivingSpace } from "./livingspace.repo.interface";
export class LivingSpaceRepo implements RepoLivingSpace<ServerResponse> {
  url: string;
  constructor() {
    this.url = currentUrl;
  }
  async create(
    newLivingSpace: Partial<LivingSpaceStructure>,
    urlExtraPath: string
  ): Promise<ServerResponse> {
    const url = this.url + "/livingspace" + urlExtraPath;
    console.log(url);
    console.log(newLivingSpace);

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newLivingSpace),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    console.log(data);

    return data;
  }

  async update(
    userInfo: Partial<LivingSpaceStructure>,
    urlExtraPath: string,
    token: string
  ): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(userInfo),
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }

  async getAll(urlExtraPath: string): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    console.log(data);

    return data;
  }

  async getById(
    urlExtraPath: string,
    id: string
  ): Promise<LivingSpaceStructure[]> {
    const url = this.url + "/" + urlExtraPath + "/" + id;
    console.log(url);
    console.log(id);

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data.results;
  }
  async delete(id: string, token: string): Promise<void> {
    const url = this.url + "/livingspace/delete";
    console.log(url);
    const resp = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok)
      throw new Error("Error http: " + resp.status + resp.statusText);
  }
}
