import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
  },
  header: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    minHeight: 186,
    width: "100%",
    padding: 18,
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    width: 345,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    paddingHorizontal: 5,
    paddingBottom: 32,
  },
  headerIcons: {
    alignSelf: "stretch",
    alignItems: "center",
    marginVertical: 8,
  },
  headerIcon: {
    width: 24,
    height: 24,
    alignSelf: "stretch",
    marginVertical: 8,
  },
  welcomeContainer: {
    marginTop: 18,
    width: 345,
    maxWidth: "100%",
  },
  welcomeMessage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: 216,
  },
  welcomeText: {
    width: "100%",
    paddingBottom: 17,
  },
  locationContainer: {
    textDecorationLine: "underline",
  },
  profileImage: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },
  profileTabs: {
    borderRadius: 100,
    marginTop: 13,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  activeTab: {
    borderRadius: 29,
    backgroundColor: "#000",
    paddingHorizontal: 11,
    paddingVertical: 13,
    width: 106,
    alignItems: "center",
  },
  activeTabText: {
    color: "#fff",
  },
  inactiveTab: {
    borderRadius: 29,
    paddingHorizontal: 35,
    paddingVertical: 13,
    width: 120,
    alignItems: "center",
  },
  sectionContainer: {
    borderRadius: 8,
    marginTop: 15,
    width: "100%",
    maxWidth: 366,
    padding: 16,
    paddingVertical: 12,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    width: "100%",
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  sectionTitle: {
    flex: 1,
  },
  sectionIcon: {
    width: 16,
    height: 16,
  },
  sectionDescription: {
    fontSize: 12,
    color: "#667085",
  },
  outfitItems: {
    borderRadius: 4,
    marginTop: 12,
    width: "100%",
    paddingRight: 16,
    paddingVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  outfitItem: {
    width: 100,
    alignItems: "center",
  },
  outfitItemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  outfitItemDetails: {
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
  brandText: {
    fontSize: 12,
    color: "#667085",
  },
  searchBar: {
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    marginTop: 16,
    width: "100%",
    padding: 10,
  },
  searchInput: {
    fontSize: 12,
    color: "#7C8DA6",
  },
  communityMembers: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  communityMember: {
    width: 52,
    alignItems: "center",
  },
  communityMemberImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  communityMemberName: {
    marginTop: 6,
    fontSize: 10,
    textAlign: "center",
  },
  plannedLooks: {
    borderRadius: 4,
    marginTop: 12,
    width: "100%",
    paddingRight: 12,
    paddingVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plannedLook: {
    width: 100,
    alignItems: "center",
  },
  plannedLookImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  plannedLookDetails: {
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
  createButton: {
    borderRadius: 4,
    marginTop: 12,
    width: 105,
    paddingHorizontal: 33,
    paddingVertical: 5,
    backgroundColor: "#000",
    alignSelf: "center",
  },
  createButtonText: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
  inviteImageContainer: {
    alignSelf: "stretch",
    minHeight: 202,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  inviteImage: {
    width: 159,
    height: 200,
    borderRadius: 6,
  },
  inviteContent: {
    alignSelf: "stretch",
    minHeight: 184,
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  inviteTextContainer: {
    width: "100%",
    maxWidth: 141,
    flexDirection: "column",
    alignItems: "center",
  },
  inviteTitle: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  inviteDescription: {
    fontSize: 10,
    color: "#667085",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 14,
  },
  usernameContainer: {
    marginTop: 16,
    width: 96,
    alignItems: "center",
  },
  username: {
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "dashed",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: "center",
  },
  usernameDescription: {
    fontSize: 8,
    color: "#667085",
    marginTop: 8,
    textAlign: "center",
  },
  socialMediaIcons: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  socialIcon: {
    width: 18,
    height: 18,
    marginRight: 9, // spacing instead of gap
  },
  bottomImage: {
    aspectRatio: 2,
    width: "100%",
    marginTop: 15,
  },
});
