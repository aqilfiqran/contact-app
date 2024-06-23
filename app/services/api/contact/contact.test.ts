import { apiInstance } from "../api"
import {
  OptionsContactCreate,
  OptionsContactDelete,
  OptionsContactDetail,
  OptionsContactUpdate,
} from "./contact.types"
import { contactApi } from "./contact"

describe("contactApi", () => {
  describe("contactList", () => {
    it("should call apiInstance.get with the correct endpoint", () => {
      const getSpy = jest.spyOn(apiInstance, "get")
      contactApi.contactList()
      expect(getSpy).toHaveBeenCalledWith("contact")
    })
  })

  describe("contactDetail", () => {
    it("should call apiInstance.get with the correct endpoint and params", () => {
      const getSpy = jest.spyOn(apiInstance, "get")
      const options: OptionsContactDetail = { params: { id: "123" } }
      contactApi.contactDetail(options)
      expect(getSpy).toHaveBeenCalledWith("contact/123")
    })
  })

  describe("contactCreate", () => {
    it("should call apiInstance.post with the correct endpoint and body", () => {
      const postSpy = jest.spyOn(apiInstance, "post")
      const options: OptionsContactCreate = {
        body: { firstName: "John", lastName: "Doe", photo: "N/A", age: 25 },
      }
      contactApi.contactCreate(options)
      expect(postSpy).toHaveBeenCalledWith("contact", options.body)
    })
  })

  describe("contactUpdate", () => {
    it("should call apiInstance.put with the correct endpoint, params, and body", () => {
      const putSpy = jest.spyOn(apiInstance, "put")
      const options: OptionsContactUpdate = {
        body: { firstName: "John", lastName: "Doe", photo: "N/A", age: 25 },
        params: { id: "123" },
      }
      contactApi.contactUpdate(options)
      expect(putSpy).toHaveBeenCalledWith("contact/123", options.body)
    })
  })

  describe("contactDelete", () => {
    it("should call apiInstance.delete with the correct endpoint and params", () => {
      const deleteSpy = jest.spyOn(apiInstance, "delete")
      const options: OptionsContactDelete = { params: { id: "123" } }
      contactApi.contactDelete(options)
      expect(deleteSpy).toHaveBeenCalledWith("contact/123")
    })
  })
})
