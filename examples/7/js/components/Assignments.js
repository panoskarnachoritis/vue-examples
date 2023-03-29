import  AssignmentList from "./AssignmentList.js";

export default  {
    components: { AssignmentList },

    template: `
        <section class="space-y-6">
          <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
          <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Project 1', complete: false, id: 1 },
                { name: 'Project 2', complete: false, id: 2 },
                { name: 'Project 3', complete: false, id: 3 },
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    }
}