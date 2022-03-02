class ApiService {
  apiBase = 'https://aviasales-test-api.java-mentor.com/';

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  };

  async getId() {
    const res = await this.getResource(`search`);
    return res.searchId;
  };

  async getTickets(searchId) {
    const res = await this.getResource(`tickets?searchId=${searchId}`);
    return res;
  }
};

const apiService = new ApiService();
export default apiService;